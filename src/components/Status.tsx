import React from "react";
import { Text } from "ink";

type StatusProps = {
  slippiConnected: boolean,
  serverConnected: boolean
};

const Status = ({ slippiConnected, serverConnected }: StatusProps) => {
  console.log('rendering status with', slippiConnected, serverConnected);
  // TODO: Handle errors and stuff
  return (
    <>
      {serverConnected ? <Text>🟢 Server connected</Text> : null}
      {slippiConnected ? <Text>🟢 Slippi connected</Text> : null}
    </>
  );
};

export default Status;
