import { Command } from '@oclif/core'
import pm2 from 'pm2';
import { BRIDGE_RUNNING } from '../../common/messages.js';

export default class Start extends Command {
  static description = 'Start it';
  static examples = [
    `TODO :)`,
  ];
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Start);

    pm2.connect((err) => {
      if (err) {
        console.error(err);
        process.exit(2);
      }

      pm2.start({
        script: 'lib/slippi-web-bridge/build/index.js',
        name: 'slippi-web-bridge'
      }, (err, apps) => {
        if (err) {
          console.error(err);
          return pm2.disconnect();
        }

        this.log(BRIDGE_RUNNING);
        pm2.disconnect();
      })
    });
  }
}
