import React from "react";
import { Box, Text } from "ink";
import { GameStartType } from "@slippi/slippi-js";

import { playerInfo } from "../common/util.js";

type GameDisplayProps = {
  gameSettings: GameStartType
};

const portToColor = new Map();
portToColor.set(1, "red");
portToColor.set(2, "blue");
portToColor.set(3, "yellow");
portToColor.set(4, "green");

const GameDisplay = ({ gameSettings }: GameDisplayProps) => {
  const playerInfos = playerInfo(gameSettings.players);

  return (
    <Box>
      <Box marginRight={1}>
        <Text>Streaming game:</Text>
      </Box>
      <Box marginRight={1}>
        <Text color={portToColor.get(playerInfos.player1.port)}>(P{playerInfos.player1.port}) {playerInfos.player1.character}</Text>
      </Box>
      <Box marginRight={1}>
        <Text>vs.</Text>
      </Box>
      <Box>
        <Text color={portToColor.get(playerInfos.player2.port)}>(P{playerInfos.player2.port}) {playerInfos.player2.character}</Text>
      </Box>
    </Box>
  );
};

export default GameDisplay;
