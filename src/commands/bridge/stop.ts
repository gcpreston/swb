import { Command } from '@oclif/core';
import pm2 from 'pm2';
import { BRIDGE_STOPPED } from '../../common/messages.js';

export default class Stop extends Command {
  static description = 'Stop it';
  static examples = [
    `TODO :)`,
  ];
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Stop);

    pm2.connect((err: any) => {
      if (err) {
        console.error(err);
        process.exit(2);
      }

      pm2.stop('slippi-web-bridge', (err: any) => {
        if (err) {
          console.error(err);
          return pm2.disconnect();
        }

        this.log(BRIDGE_STOPPED);
        pm2.disconnect();
      })
    });
  }
}
