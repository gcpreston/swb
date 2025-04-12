import { Command } from '@oclif/core'
import { render } from 'ink';
import React from 'react';

import Home from '../components/Home.js';
import patchConsole from 'patch-console';

export default class Start extends Command {
  static description = 'Start it';
  static examples = [
    `TODO :)`,
  ];
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Start);

		// Don't show any console output from slippi-js or slippi-web-bridge
		patchConsole((_stream, _data) => {});

		const app = render(<Home />, { patchConsole: false });
		await app.waitUntilExit();

		// After DolphinConnection disconnect, the node process does not automatically
		// exit, unlike other EventListeners after being closed. I believe this is due
		// to enet not totally shutting down.
		// For this reason, the process is manually exited at the end, as this mimics
		// the behavior of the Ctrl + C which would otherwise have to be performed.
		process.exit();
  }
}
