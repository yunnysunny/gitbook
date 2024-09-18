#! /usr/bin/env node
/* eslint-disable no-console */

var {Command, Option} = require('commander');
// var bookRoot = parsedArgv._[1] || process.cwd();
const program = new Command();


process.on('unhandledRejection', function(err) {
    console.error(err.stack);
    process.exit(1);
});
process.on('uncaughtException', function(err) {
    console.error(err.stack);
    process.exit(2);
});
const commands = require('../lib/cli');
for (const cmd of commands) {
    const command = program.command(cmd.name)
        .description(cmd.description);
    for (const option of cmd.options) {
        const cmdOption = new Option(option.name, option.description);
        if (option.values) {
            cmdOption.choices(option.values);
        }
        if (option.defaults) {
            cmdOption.default(option.defaults);
        }
        command.addOption(cmdOption);
    }
    command.action(function(...args) {
        const kwargs = command.opts();

        cmd.exec(args, kwargs);
    });
}


program.parse();
