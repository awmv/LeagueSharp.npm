'use strict';
var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var S = require('string');
var osenv = require('osenv');
var lsharp = path.join(osenv.tmpdir(), 'leaguesharp.json');
var chalk = require('chalk');
var figures = require('figures');
var warning = chalk.magenta;

var system = function () {

    var getSystemPath =
    {
        type: 'input',
        name: 'systempath',
        message: 'Drag and drop your LeagueSharp folder in here:'
    };

    inquirer.prompt(getSystemPath, function (result) {

        var dataPath = {
            path: result.systempath.trim()
        };
        var dataPathWithSystem = {
            path: path.join(result.systempath.trim(), 'System')
        };
        var data = JSON.stringify(dataPath);
        var dataWithSystem = JSON.stringify(dataPathWithSystem);
        if (!S(result.systempath.trim()).contains('LeagueSharp')) {
            console.log(warning(figures.cross, 'Invalid path.'));
        } else {
            fs.exists(path.join(result.systempath.trim(), 'System'), function (exists) {
                if (exists) {
                    fs.writeFile(lsharp, dataWithSystem), function (err) {
                        if (err) {
                            console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                        }
                    }
                    console.log(chalk.green(chalk.cyan(figures.tick), 'Your path has been updated.'));
                } else {
                    if (!S(result.systempath.trim()).contains('System')) {
                        console.log('Invalid path.'.cyan);
                    } else {
                        fs.writeFile(lsharp, data), function (err) {
                            if (err) {
                                console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                            }
                        }
                        console.log(chalk.green(chalk.cyan(figures.tick), 'Your path has been updated.'));
                    }
                }
            });
        }
    });
}

module.exports = system;