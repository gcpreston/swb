swb
=================

Forward live Slippi data to a web interface.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/swb.svg)](https://npmjs.org/package/swb)
[![Downloads/week](https://img.shields.io/npm/dw/swb.svg)](https://npmjs.org/package/swb)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g swb
$ swb COMMAND
running command...
$ swb (--version)
swb/0.0.0 darwin-arm64 node-v23.10.0
$ swb --help [COMMAND]
USAGE
  $ swb COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`swb hello PERSON`](#swb-hello-person)
* [`swb hello world`](#swb-hello-world)
* [`swb help [COMMAND]`](#swb-help-command)
* [`swb plugins`](#swb-plugins)
* [`swb plugins add PLUGIN`](#swb-plugins-add-plugin)
* [`swb plugins:inspect PLUGIN...`](#swb-pluginsinspect-plugin)
* [`swb plugins install PLUGIN`](#swb-plugins-install-plugin)
* [`swb plugins link PATH`](#swb-plugins-link-path)
* [`swb plugins remove [PLUGIN]`](#swb-plugins-remove-plugin)
* [`swb plugins reset`](#swb-plugins-reset)
* [`swb plugins uninstall [PLUGIN]`](#swb-plugins-uninstall-plugin)
* [`swb plugins unlink [PLUGIN]`](#swb-plugins-unlink-plugin)
* [`swb plugins update`](#swb-plugins-update)

## `swb hello PERSON`

Say hello

```
USAGE
  $ swb hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ swb hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/gcpreston/slippi-web-bridge/blob/v0.0.0/src/commands/hello/index.ts)_

## `swb hello world`

Say hello world

```
USAGE
  $ swb hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ swb hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/gcpreston/slippi-web-bridge/blob/v0.0.0/src/commands/hello/world.ts)_

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

## `swb plugins`

List installed plugins.

```
USAGE
  $ swb plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ swb plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/index.ts)_

## `swb plugins add PLUGIN`

Installs a plugin into swb.

```
USAGE
  $ swb plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into swb.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SWB_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SWB_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ swb plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ swb plugins add myplugin

  Install a plugin from a github url.

    $ swb plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ swb plugins add someuser/someplugin
```

## `swb plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ swb plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ swb plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/inspect.ts)_

## `swb plugins install PLUGIN`

Installs a plugin into swb.

```
USAGE
  $ swb plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into swb.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SWB_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SWB_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ swb plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ swb plugins install myplugin

  Install a plugin from a github url.

    $ swb plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ swb plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/install.ts)_

## `swb plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ swb plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ swb plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/link.ts)_

## `swb plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ swb plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ swb plugins unlink
  $ swb plugins remove

EXAMPLES
  $ swb plugins remove myplugin
```

## `swb plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ swb plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/reset.ts)_

## `swb plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ swb plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ swb plugins unlink
  $ swb plugins remove

EXAMPLES
  $ swb plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/uninstall.ts)_

## `swb plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ swb plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ swb plugins unlink
  $ swb plugins remove

EXAMPLES
  $ swb plugins unlink myplugin
```

## `swb plugins update`

Update installed plugins.

```
USAGE
  $ swb plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/update.ts)_
<!-- commandsstop -->
