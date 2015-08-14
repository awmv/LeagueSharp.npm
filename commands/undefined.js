'use strict';
var chalk = require('chalk');
var path = require('path');
var updateNotifier = require('update-notifier');
var g = chalk.gray;
var green = chalk.bold.green;
var pkg = require(path.join(__dirname, '..', 'package.json'));
var figures = require('figures');

var undefined = function (err) {
    function callback(err, update) {
        if (err) {
            console.log(err);
            return;
        }
        if (update.current <= update.latest) {
            var newVersion = chalk.green('new version available');
        }
        if (update.current >= update.latest) {
            newVersion = newVersion.replace(/new version available/g, '\t\t      ');
        }
        var Program = '    __                               _____ __\n   \/ \/   ___  ____  ____  __  _____ \/ ___\/\/ \/_  ____  _________\n  \/ \/   \/ _ \\\/ __ `\/ __ `\/ \/ \/ \/ _ \\\\__ \\\/ __ \\\/ __ `\/ ___\/ __ \\\n \/ \/__ \/  __\/ \/_\/ \/ \/_\/ \/ \/_\/ \/  __\/__\/ \/ \/ \/ \/ \/_\/ \/ \/  \/ \/_\/ \/\n' + g('#') + '\\____\/\\___\/\\__._\/\\__, \/\\__._\/\\___\/____\/_\/ \/_\/\\__._\/_\/  \/ .___\/' + g('#\n#################') + '\/____\/' + g('########www.joduska.me##########') + '\/_\/' + g('######\n################################################################');

        console.log(Program);
        console.log('\n' + chalk.yellow('Available commands:'), '\t\t', newVersion, chalk.yellow('['), update.latest, chalk.yellow(']'));
        console.log('\n' + green('init'), '\t\t' + ' Initialize new assembly in the current directory');
        console.log(green('update'), '\t\t' + ' Applies previous API changes in the current \"');
        console.log(green('system'), '\t\t' + ' Updates the location of your LeagueSharp folder');
        console.log(green('self-update'), '\t' + ' Updates this app to the latest version available');
        console.log(green('clear'), '\t\t' + ' Deletes your %AppData%/LeagueSharp directory');
        console.log(green('compile'), '\t' + ' Compile L#.Common to L#.SDK assembly (comming soon)');
        console.log(green('ref'), '\t\t' + ' Updates the reference of an assembly (comming soon)');
    }

    if (err) {
        console.log(err);
        return;
    }
    var notifier = updateNotifier({pkg: pkg, callback: callback});
}

module.exports = undefined;
