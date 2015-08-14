'use strict';
var path = require('path');
var osenv = require('osenv');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs-extra'));
var chalk = require('chalk');
var figures = require('figures');

var clear = function () {
  return Promise.try(function() {
      return fs.readdirAsync(path.join(osenv.home(), 'AppData', 'Roaming'));
  }).filter(function(file){
      return (file.match(/^LS[A-Z0-9]{8}$/gm) !== null);
  }).then(function(matches) {
      if (matches.length != 1) {
        console.log(chalk.magenta(figures.cross), 'Either your assemblies have not been compiled yet or your LeagueSharp folder could not been located.');
      } else {
        var repositoriesDir = path.join(osenv.home(), 'AppData', 'Roaming', matches.toString(), 'Repositories');
        fs.remove(repositoriesDir, function (err) {
          console.log(chalk.cyan(figures.tick), repositoriesDir, chalk.green('has been deleted.'));
        });
      }
  });
}

module.exports = clear;
