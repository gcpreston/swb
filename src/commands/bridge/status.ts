import { Command } from '@oclif/core'
import pm2 from 'pm2';
import { BRIDGE_RUNNING, BRIDGE_STOPPED } from '../../common/messages.js';

export default class Start extends Command {
  static description = 'Start it';
  static examples = [
    'TODO :)',
  ];
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Start);

    pm2.connect((err: any) => {
      if (err) {
        console.error(err);
        process.exit(2);
      }

      pm2.describe('slippi-web-bridge', (err: any, desc: any) => {
        if (err) {
          console.error(err);
          pm2.disconnect();
        }

        if (desc.length > 0 && desc[0].pid) {
          this.log(BRIDGE_RUNNING);
        } else {
          this.log(BRIDGE_STOPPED);
        }

        pm2.disconnect();
      })
    });
  }
}
