import React, { useState, useEffect, useMemo } from "react";
import { Box, useApp, useInput } from "ink";
import {
  Bridge,
  DisconnectReason,
  SpectatorModeAdapter,
  IStreamAdapter
} from "slippi-web-bridge";
import slp from "@slippi/slippi-js"
const { Command: SlpCommand, SlpStream, SlpStreamMode, SlpStreamEvent } = slp;
import { EventEmitter } from "node:events";

import Status from "./Status.js";
import Versus from "./Versus.js";
import Footer from "./Footer.js";
import { GameStartType } from "@slippi/slippi-js";

class LocalAdapter extends EventEmitter implements IStreamAdapter {
  public name = "local-adapter";
  private slpStream = new SlpStream({ mode: SlpStreamMode.AUTO });

  constructor() {
    super()
    this.slpStream.on(SlpStreamEvent.COMMAND, (data) => {
      const { command, payload } = data;

      switch (command) {
        case SlpCommand.GAME_START:
          this.emit("game-start", payload);
          break;
        case SlpCommand.GAME_END:
          this.emit("game-end");
          break;
      }
    });
  }

  public async connect() {} // nothing to do

  public disconnect() {
    this.slpStream.end();
  }

  public receive(packet: Buffer) {
    this.slpStream.write(packet);
  }
}

type HomeProps = {
  bridge: Bridge
};

const Home = ({ bridge }: HomeProps) => {
  const [bridgeId, setBridgeId] = useState<string | null>(null);
  const [slippiConnected, setSlippiConnected] = useState<boolean>(false);
  const [gameSettings, setGameSettings] = useState<GameStartType | null>(null);
  const [disconnectReason, setDisconnectReason] = useState<DisconnectReason | null>(null);

  const connected = useMemo<boolean>(
    () => Boolean(bridgeId) && slippiConnected && !Boolean(disconnectReason),
    [bridgeId, slippiConnected, disconnectReason]
  );

  const { exit } = useApp();

  useEffect(() => {
    const relayAdapter = new SpectatorModeAdapter("ws://localhost:4000/bridge_socket/websocket");
    const localAdapter = new LocalAdapter();
    bridge.pipeTo(relayAdapter);

    relayAdapter.on("connect", (data) => {
      const { bridge_id: bridgeId } = JSON.parse(data);
      setBridgeId(bridgeId);
    });
    localAdapter.on("game-start", (payload: GameStartType) => {
      setGameSettings(payload);
    });
    bridge.on("game-end", () => {
      setGameSettings(null);
    })
    bridge.on("slippi-connected", () => {
      setSlippiConnected(true);
    });
    bridge.on("close", (reason: DisconnectReason) => {
      setDisconnectReason(reason);
      // Give the app time to render disconnection status before exiting.
      setTimeout(exit, 100);
    })

    return () => {
      bridge.removeAllListeners();
    }
  }, []);

	useInput((input, key) => {
	  if (input === "q" || key.escape) {
      bridge.quit();
	  }
	});

  return (
    <Box flexDirection="column">
      <Status
        bridgeId={bridgeId}
        slippiConnected={slippiConnected}
        disconnectReason={disconnectReason}
      />
      {connected && <Versus gameSettings={gameSettings} />}
      <Footer />
    </Box>
  );
};

export default Home;
