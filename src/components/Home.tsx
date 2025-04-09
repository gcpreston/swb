import React, { useState, useEffect } from "react";
import { Box, useApp, useInput } from "ink";
import { useStdoutDimensions } from "../hooks/useStdoutDimensions.js";
import Title from "./Title.js";
import Versus from "./Versus.js";
import Footer from "./Footer.js";

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
    <Box height={y} alignItems="center" justifyContent="space-between" flexDirection="column">
      <Title />
      <Versus />
      <Footer />
    </Box>
  );
};

export default Home;
