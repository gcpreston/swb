import React from "react";
import { Box, Text } from "ink";
import Spinner from "ink-spinner";

type StatusProps = {
  slippiConnected: boolean,
  serverConnected: boolean
};

const Status = ({ slippiConnected, serverConnected }: StatusProps) => {
  // TODO: Handle errors and stuff
  return (
    <>
      {serverConnected ?
        <>
          <Box><Text color="green">•</Text><Text> Server connected</Text></Box>
          {slippiConnected ?
            <Box><Text color="green">•</Text><Text> Slippi connected</Text></Box>
            :
            <Box><Spinner type="dots" /><Text> Slippi connecting...</Text></Box>
          }
        </>
        :
        <Box><Spinner type="dots" /><Text> Server connecting...</Text></Box>
      }
    </>
  );
};

export default Status;
