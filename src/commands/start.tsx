import { Command, Flags } from '@oclif/core'
import { render } from 'ink';
import React from 'react';
import patchConsole from 'patch-console';
import fs from "node:fs";
import path from "node:path";

import Home from '../components/Home.js';

const SPECTATOR_MODE_DEFAULT_URL = "wss://spectator-mode.fly.dev/bridge_socket/websocket";

export default class Start extends Command {
  static description = "Start the web bridge. Connects to a relay which by default is located at wss://spectator-mode.fly.dev/bridge_socket/websocket.";
  static examples = [
    "swb start",
		"swb start --sink ws://localhost:4000/bridge_socket/websocket"
  ];

	static flags = {
		sink: Flags.string(),
	}

  async run(): Promise<void> {
    const { flags } = await this.parse(Start);
		const sink = flags.sink || SPECTATOR_MODE_DEFAULT_URL;

		const logDir = "/tmp/swb/";
		if (!fs.existsSync(logDir)){
			fs.mkdirSync(logDir, { recursive: true });
		}
		const logFile = fs.createWriteStream(path.join(logDir, "debug.log"), { flags: "w" });
		const errorFile = fs.createWriteStream(path.join(logDir, "error.log"), { flags: "w" });

		// Redirect output and errors from slippi-js, slippi-web-bridge, and other
		// underlying libraries to the log file.
		patchConsole((stream, data) => {
			const log = `${new Date().toISOString()} [${stream}] ${data}`;
			if (stream === "stderr") {
				errorFile.write(log);
			} else {
				logFile.write(log);
			}
		});

		process.on("uncaughtException", (error) => {
			console.error("Uncaught exception:", error);
		});

		const app = render(<Home sink={sink} />, { patchConsole: false });
		await app.waitUntilExit();

		// After DolphinConnection disconnect, the node process does not automatically
		// exit, unlike other EventListeners after being closed. I believe this is due
		// to enet not totally shutting down.
		// For this reason, the process is manually exited at the end, as this mimics
		// the behavior of the Ctrl + C which would otherwise have to be performed.
		// Wrap in setTimeout to give error boundary time to render and log before exit.
		setTimeout(() => {
			process.exit();
		}, 100);
  }
}
