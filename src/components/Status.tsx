import React from "react";
import { Box, Text } from "ink";
import Spinner from "ink-spinner";
import { DisconnectReason } from "slippi-web-bridge";

type StatusProps = {
  bridgeId: string | null,
  slippiConnected: boolean,
  disconnectReason: DisconnectReason | null
};

const Status = ({ bridgeId, slippiConnected, disconnectReason }: StatusProps) => {
  let wsInfo: React.JSX.Element;
  let slippiInfo: React.JSX.Element;

  if (disconnectReason) {
    let serverReason: string | null = null;
    let slippiReason: string | null = null;

    switch (disconnectReason) {
      case DisconnectReason.WS_TIMEOUT:
        serverReason = " (timeout)";
        break;
      case DisconnectReason.WS_DISCONNECT:
        serverReason = " (disconnect)";
        break;
      case DisconnectReason.SLIPPI_TIMEOUT:
        slippiReason = " (timeout)";
        break;
      case DisconnectReason.SLIPPI_DISCONNECT:
        slippiReason = " (disconnect)";
        break;
      case DisconnectReason.ERROR:
        serverReason = " (error)";
        slippiReason = " (error)";
        break;
      case DisconnectReason.QUIT:
        serverReason = " (quit)";
        slippiReason = " (quit)";
        break;
    }

    wsInfo = <Box><Text color="red">•</Text><Text> Server disconnected{serverReason}</Text></Box>;
    slippiInfo = <Box><Text color="red">•</Text><Text> Slippi disconnected{slippiReason}</Text></Box>
  } else {
    if (bridgeId) {
      wsInfo = <Box><Text color="green">•</Text><Text> Server connected, stream ID: {bridgeId}</Text></Box>;
    } else {
      wsInfo = <Box><Spinner type="dots" /><Text> Server connecting...</Text></Box>;
    }

    if (slippiConnected) {
      slippiInfo = <Box><Text color="green">•</Text><Text> Slippi connected</Text></Box>;
    } else {
      slippiInfo = <Box><Spinner type="dots" /><Text> Slippi connecting...</Text></Box>;
    }
  }

  return (
    <>
      {wsInfo}
      {slippiInfo}
    </>
  );
};

export default Status;
