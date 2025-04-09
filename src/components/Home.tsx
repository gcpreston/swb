import React, { useState, useEffect } from "react";
import { Box, useApp, useInput } from "ink";
import { Bridge, SlippiEvent, GameStartType, GameEndType } from "slippi-web-bridge";

import { useStdoutDimensions } from "../hooks/useStdoutDimensions.js";
import Title from "./Title.js";
import Versus from "./Versus.js";
import Footer from "./Footer.js";

const Home = ({ bridge }: { bridge: Bridge }) => {
  const [gameSettings, setGameSettings] = useState<GameStartType | null>(null);

  useEffect(() => {
    bridge.on(SlippiEvent.GAME_START, (payload: GameStartType) => {
      setGameSettings(payload);
    });

    bridge.on(SlippiEvent.GAME_END, (payload: GameEndType) => {
      setGameSettings(null);
    });

    return () => {
      bridge.removeAllListeners();
    }
  }, []);

  const { exit } = useApp();

	useInput((input, key) => {
	  if (input === "q" || key.escape) {
		  exit();
	  }
	});

  const [x, y] = useStdoutDimensions();

  return (
    <Box height={y} alignItems="center" justifyContent="space-between" flexDirection="column">
      <Title />
      <Versus gameSettings={gameSettings} />
      <Footer />
    </Box>
  );
};

export default Home;
