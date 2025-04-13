import React, { useState, useEffect, useMemo } from "react";
import { Box, useApp, useInput } from "ink";
import {
  Bridge,
  SLIPPI_LOCAL_ADDR,
  SLIPPI_PORTS,
  BridgeEvent,
  DisconnectReason,
  GameStartType
} from "slippi-web-bridge";

import Status from "./Status.js";
import Versus from "./Versus.js";
import Footer from "./Footer.js";

// const LOCAL_WEB = "ws://localhost:4000/bridge_socket/websocket";

type HomeProps = {
  sink: string
};

const Home = ({ sink }: HomeProps) => {
  const [bridge, setBridge] = useState<Bridge | undefined>(undefined);
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
    const bridge = new Bridge();
    setBridge(bridge);

    bridge.connect(SLIPPI_LOCAL_ADDR, SLIPPI_PORTS.DEFAULT, sink);

    bridge.on(BridgeEvent.WS_CONNECTED, (bridgeId: string) => {
      setBridgeId(bridgeId);
    });
    bridge.on(BridgeEvent.SLIPPI_CONNECTED, () => {
      setSlippiConnected(true);
    });
    bridge.on(BridgeEvent.GAME_START, (payload: GameStartType) => {
      setGameSettings(payload);
    });
    bridge.on(BridgeEvent.GAME_END, () => {
      setGameSettings(null);
    })
    bridge.on(BridgeEvent.DISCONNECTED, (reason: DisconnectReason) => {
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
      bridge?.quit();
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
