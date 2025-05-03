swb
=================

Forward live Slippi data to a web interface.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/swb.svg)](https://npmjs.org/package/@gcpreston/swb)
[![Downloads/week](https://img.shields.io/npm/dw/swb.svg)](https://npmjs.org/package/@gcpreston/swb)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @gcpreston/swb
$ swb COMMAND
running command...
$ swb (--version)
@gcpreston/swb/0.1.10 darwin-arm64 node-v23.10.0
$ swb --help [COMMAND]
USAGE
  $ swb COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`swb start`](#swb-start)

## `swb start`

Start the web bridge. Connects to a relay which by default is located at wss://spectator-mode.fly.dev/bridge_socket/websocket.

```
USAGE
  $ swb start [--sink <value>]

FLAGS
  --sink=<value>

DESCRIPTION
  Start the web bridge. Connects to a relay which by default is located at
  wss://spectator-mode.fly.dev/bridge_socket/websocket.

EXAMPLES
  $ swb start

  $ swb start --sink ws://localhost:4000/bridge_socket/websocket
```

_See code: [src/commands/start.ts](https://github.com/gcpreston/swb/blob/v0.1.10/src/commands/start.ts)_
<!-- commandsstop -->
* [`swb start`](#swb-start)
* [`swb help [COMMAND]`](#swb-help-command)

## `swb start`

Start it

```
USAGE
  $ swb start

DESCRIPTION
  Start it

EXAMPLES
  TODO :)
```

_See code: [src/commands/start.ts](https://github.com/gcpreston/slippi-web-bridge/blob/v0.1.0/src/commands/start.ts)_

## `swb help [COMMAND]`

Display help for swb.

```
USAGE
  $ swb help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for swb.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.27/src/commands/help.ts)_
