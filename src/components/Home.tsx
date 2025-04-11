import React, { useState, useEffect, useMemo } from "react";
import { Box, useApp, useInput } from "ink";
import {
  Bridge,
  SLIPPI_LOCAL_ADDR,
  SLIPPI_PORTS,
  BridgeState,
  GameStartType
} from "slippi-web-bridge";

import Status from "./Status.js";
import Versus from "./Versus.js";
import Footer from "./Footer.js";

const LOCAL_WEB = "ws://localhost:4000/bridge_socket/websocket";

const Home = () => {
  const [slippiConnected, setSlippiConnected] = useState<boolean>(false);
  const [serverConnected, setServerConnected] = useState<boolean>(false);
  const connected = useMemo<boolean>(() => slippiConnected && serverConnected, [slippiConnected, serverConnected]);
  const [gameSettings, setGameSettings] = useState<GameStartType | null>(null);
  const [bridge, setBridge] = useState<Bridge | undefined>(undefined);

  const { exit } = useApp();

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

	useInput((input, key) => {
	  if (input === "q" || key.escape) {
      bridge?.disconnect();
      exit();
      process.exit();
	  }
	});

  return (
    <Box flexDirection="column">
      <Status slippiConnected={slippiConnected} serverConnected={serverConnected} />
      {connected && <Versus gameSettings={gameSettings} />}
      <Footer />
    </Box>
  );
};

export default Home;
