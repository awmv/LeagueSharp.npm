#!/usr/bin/env node
'use strict';
var chalk = require('chalk');

if ([undefined, 'init', 'update', 'system', 'self-update', 'clear'].indexOf(process.argv.slice(2)[0]) === -1) {
    console.log('Unfortunately', chalk.cyan('\'') + chalk.magenta(process.argv.slice(2)) + chalk.cyan('\''), 'is not available.', chalk.green('Please try again.'));
} else {
    require('.\/commands\/' + process.argv.slice(2)[0])();
}
