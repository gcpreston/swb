import { Command } from '@oclif/core'
import { render } from 'ink';
import React from 'react';
import {
	Bridge,
	SLIPPI_LOCAL_ADDR,
	SLIPPI_PORTS
} from "slippi-web-bridge";

import Home from '../../components/Home.js';

const LOCAL_WEB = "ws://localhost:4000/bridge_socket/websocket";

export default class Start extends Command {
  static description = 'Start it';
  static examples = [
    `TODO :)`,
  ];
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Start);

    console.log('got args and flags', args, flags);

		// process.stdout.write("\x1b[?1049h"); // enter alternate buffer

		// process.on("exit", () => {
		// 	process.stdout.write("\x1b[?1049l") // leave alternate buffer
		// });

		const bridge = new Bridge(
			SLIPPI_LOCAL_ADDR,
			SLIPPI_PORTS.DEFAULT,
			LOCAL_WEB
		);

		const app = render(<Home bridge={bridge} />);
		await app.waitUntilExit();
  }
}
