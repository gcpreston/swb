import { Command } from '@oclif/core'
import { render } from 'ink';
import React from 'react';

import Home from '../../components/Home.js';
import patchConsole from 'patch-console';

export default class Start extends Command {
  static description = 'Start it';
  static examples = [
    `TODO :)`,
  ];
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Start);

		// process.stdout.write("\x1b[?1049h"); // enter alternate buffer

		// process.on("exit", () => {
		// 	process.stdout.write("\x1b[?1049l") // leave alternate buffer
		// });

		// Don't show any console output from slippi-js or slippi-web-bridge
		patchConsole((_stream, _data) => {});

		const app = render(<Home />, { patchConsole: false });
		await app.waitUntilExit();
		console.log('after wait for exit');
  }
}
