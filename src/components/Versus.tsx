import React from "react";
import { Box, Text } from "ink";
import { GameStartType } from "slippi-web-bridge";

import { useStdoutDimensions } from "../hooks/useStdoutDimensions.js";

const Versus = ({ gameSettings }: { gameSettings: GameStartType | null }) => {
  const [x, y] = useStdoutDimensions();

  return (
    <Box flexDirection="row" justifyContent="space-around" width={x}>
      {gameSettings ? <Text>Have game settings</Text> : <Text>Waiting for game...</Text>}
      {/* <Box flexDirection="column">
        <Box><Text color="red">Player 1</Text></Box>
        <Box><Text>Falco</Text></Box>
      </Box>

      <Box>
        <Text>vs.</Text>
      </Box>

      <Box flexDirection="column">
        <Box><Text color="blue">Player 2</Text></Box>
        <Box><Text>Marth</Text></Box>
      </Box> */}
    </Box>
  );
}

export default Versus;
