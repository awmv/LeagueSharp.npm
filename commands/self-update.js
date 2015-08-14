'use strict';
var path = require('path');
var updateNotifier = require('update-notifier');
var pkg = require(path.join(__dirname, '..', 'package.json'));
var chalk = require('chalk');
var figures = require('figures');

var selfUpdate = function (err) {
    function callback(err, update) {
        if (err) {
            console.log(err);
        } else {
            if (update.current >= update.latest) {
                console.log(chalk.green(figures.tick), '[', chalk.green(update.latest), ']', chalk.green('is the latest version available.'));
            } else {
                console.log('Attempting to update...');
                /*
                 npm.load({global: true}, function (err) {
                 if (err) {
                 console.log(err);
                 } else {
                 npm.commands.update(['path'], function (err, data) {
                 if (err) throw err;
                 })
                 npm.on('log', function (message) {
                 console.log(message);
                 });
                 }
                 });*/
                var exec = require('child_process').exec
                exec('npm update -g leaguesharp' , function (err, stdout, stderr) {
                    console.log(err);
                    console.log(stdout);
                    console.log(stderr);
                })
            }
        }
    }
    if (err) {
        console.log(err);
    } else {
        var notifier = updateNotifier({pkg: pkg, callback: callback});

    }
}

module.exports = selfUpdate;