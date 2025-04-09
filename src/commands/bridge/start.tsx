import { Command } from '@oclif/core'
import { render, Box } from 'ink';
import React from 'react';
import Home from '../../components/Home.js';

export default class Start extends Command {
  static description = 'Start it';
  static examples = [
    `TODO :)`,
  ];
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Start);

    console.log('got args and flags', args, flags);

		process.stdout.write("\x1b[?1049h"); // enter alternate buffer

		process.on("exit", () => {
			process.stdout.write("\x1b[?1049l") // leave alternate buffer
		});

		const width = process.stdout.columns;
		const height = process.stdout.rows;


		const app = render(<Home />);

		await app.waitUntilExit();
  }
}
