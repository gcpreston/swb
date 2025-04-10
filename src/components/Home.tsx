import React, { useState, useEffect } from "react";
import { Box, useApp, useInput } from "ink";
import {
  Bridge,
  SLIPPI_LOCAL_ADDR,
  SLIPPI_PORTS,
  BridgeState,
  GameStartType
} from "slippi-web-bridge";

import { useStdoutDimensions } from "../hooks/useStdoutDimensions.js";
import Status from "./Status.js";
import Versus from "./Versus.js";
import Footer from "./Footer.js";

const LOCAL_WEB = "ws://localhost:4000/bridge_socket/websocket";

const Home = () => {
  const [slippiConnected, setSlippiConnected] = useState<boolean>(false);
  const [serverConnected, setServerConnected] = useState<boolean>(false);
  const [gameSettings, setGameSettings] = useState<GameStartType | null>(null);
  const [bridge, setBridge] = useState<Bridge | null>(null);

  useEffect(() => {
    const bridge = new Bridge(
			SLIPPI_LOCAL_ADDR,
			SLIPPI_PORTS.DEFAULT,
			LOCAL_WEB
		);
    setBridge(bridge);

    bridge.on(BridgeState.SLIPPI_CONNECTING, () => {
      setServerConnected(true);
    });
    bridge.on(BridgeState.WAITING_FOR_GAME, () => {
      setSlippiConnected(true);
      setGameSettings(null);
    });
    bridge.on(BridgeState.IN_GAME, (payload: GameStartType) => {
      setGameSettings(payload);
    });

    return () => {
      bridge.removeAllListeners();
    }
  }, []);

  const { exit } = useApp();

	useInput((input, key) => {
    console.log('got input and key', input, key);
    // THE PROBLEM
    // slippiConnection is still listening (or something) after this cleanup,
    // so the process can't exit even after the exit() call.
    // Figure out which part of the slippiConnection.disconnect() function does
    // not work for this.
	  if (input === "q" || key.escape) {
      bridge?.disconnect();
		  exit();
	  }
	});

  return (
    <Box flexDirection="column">
      <Status slippiConnected={slippiConnected} serverConnected={serverConnected} />
      <Versus gameSettings={gameSettings} />
      <Footer />
    </Box>
  );
};

export default Home;
