import { Command, Flags } from '@oclif/core'
import { render } from 'ink';
import React from 'react';
import patchConsole from 'patch-console';

import Home from '../components/Home.js';

const SPECTATOR_MODE_DEFAULT_URL = "wss://spectator-mode.fly.dev/bridge_socket/websocket";

export default class Start extends Command {
  static description = 'Start it';
  static examples = [
    `TODO :)`,
  ];

	static flags = {
		sink: Flags.string(),
	}

  async run(): Promise<void> {
    const { flags } = await this.parse(Start);
		const sink = flags.sink || SPECTATOR_MODE_DEFAULT_URL

		// Don't show any console output from slippi-js or slippi-web-bridge
		patchConsole((_stream, _data) => {});

		const app = render(<Home sink={sink} />, { patchConsole: false });
		await app.waitUntilExit();

		// After DolphinConnection disconnect, the node process does not automatically
		// exit, unlike other EventListeners after being closed. I believe this is due
		// to enet not totally shutting down.
		// For this reason, the process is manually exited at the end, as this mimics
		// the behavior of the Ctrl + C which would otherwise have to be performed.
		process.exit();
  }
}
