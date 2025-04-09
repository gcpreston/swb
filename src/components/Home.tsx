import React, { useState, useEffect } from 'react';
import { Box, Text, useApp, useInput } from 'ink';
import { useStdoutDimensions } from '../hooks/useStdoutDimensions.js';

const Home = () => {
  const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(previousCounter => previousCounter + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

  const { exit } = useApp();

	useInput((input, key) => {
	  if (input === "q" || key.escape) {
		  exit();
	  }
	});

  const [x, y] = useStdoutDimensions();

  return (
    <Box height={y} alignItems='center' justifyContent='space-between' flexDirection='column'>
      <Box>
        <Text>{counter} reactive text</Text>
      </Box>

      <Box>
        <Text color='gray'>q to quit</Text>
      </Box>
    </Box>
  );
};

export default Home;
