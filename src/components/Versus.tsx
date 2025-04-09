import React from "react";
import { Box, Text } from "ink";
import { useStdoutDimensions } from "../hooks/useStdoutDimensions.js";

const Versus = () => {
  const [x, y] = useStdoutDimensions();

  return (
    <Box flexDirection="row" justifyContent="space-around" width={x}>
      <Box flexDirection="column">
        <Box><Text color="red">Player 1</Text></Box>
        <Box><Text>Falco</Text></Box>
      </Box>

      <Box>
        <Text>vs.</Text>
      </Box>

      <Box flexDirection="column">
        <Box><Text color="blue">Player 2</Text></Box>
        <Box><Text>Marth</Text></Box>
      </Box>
    </Box>
  );
}

export default Versus;
