'use strict';
var fs = require('fs');
var S = require('string');
var path = require('path');
var osenv = require('osenv');
var lsharp = path.join(osenv.tmpdir(), 'leaguesharp.json');
var glob = require('glob');
var chalk = require('chalk');
var figures = require('figures');
var warning = chalk.magenta;
var success = chalk.green;
var async = require('async');

var regexArr = [
    /Game\.OnGameUpdate/g,
    /Game\.OnGameProcessPacket/g,
    /CountEnemysInRange/g,
    /CountAllysInRange/g,
    /Utility\.DrawCircle/g,
    /Interrupter\.OnPossibleToInterrupt/g,
    /Interrupter_OnPossibleToInterrupt/g,
    /InterruptableSpell/g,
    /\.InRange/g,
    /SimpleTs/g,
    /\.SummonerSpellbook/g,
    /InterruptableDangerLevel\./g,
    /\.BaseSkinName/g,
    /\.Name/g,
    ///\.DisplayName/g,
    /\.Distance(Player)/g
];
var replaceArr = [
    'Game.OnUpdate',
    'Game.OnProcessPacket',
    'CountEnemiesInRange',
    'CountAlliesInRange',
    'Render.Circle.DrawCircle',
    'Interrupter2.OnInterruptableTarget',
    'Interrupter2_OnInterruptableTarget',
    'Interrupter2.InterruptableTargetEventArgs',
    '.IsInRange',
    'TargetSelector',
    '.Spellbook',
    'Interrupter2.DangerLevel.',
    '.CharData.BaseSkinName',
    '.IData.SpellName',
    '.Distance(ObjectManager.Player.Position)'
];

var update = function () {
    fs.exists(lsharp, function (exists) {
        if (!exists) {
            console.log(warning(chalk.cyan(figures.warning), 'Please set your path using ' + '\'' + chalk.underline.cyan('lsharp system') + '\'' + '.'));
        } else {
            var config = require(lsharp);
            glob('**/*.cs', function (err, files) {
                if (err) {
                    console.log(err);
                } else {
                    async.map(files, function (filename, next) {
                        fs.readFile(filename, 'utf-8', function (err, contents) {
                            if (!regexArr.some(function (regex) {
                                    return regex.test(contents)
                                })) {
                                return next()
                            }
                            regexArr.forEach(function (entry) {
                                contents = contents.replace(entry, replaceArr[regexArr.indexOf(entry)]);
                            });
                            /*
                            async.map(regexArr, function (entry, next) {
                                contents = contents.replace(entry, replaceArr[regexArr.indexOf(entry)]);
                                next();
                            })
                            */
                            fs.writeFile(filename, contents, next, function (err) {
                                if (err) throw err;
                                console.log(filename, chalk.green('has been updated.1'))
                                next();
                            });
                        });
                    })
                }
            })
            glob('**/*.cs', function (err, files) {
                if (err) {
                    console.log(err);
                } else {
                    async.map(files, function (filename, next) {
                        fs.readFile(filename, 'utf-8', function (err, contents) {
                            var usingItemData = [/using ItemData = LeagueSharp\.Common\.Data\.ItemData;/g];
                            var itemData = [/ItemData/g];
                            if (!itemData.some(function (regex) {
                                    return regex.test(contents)
                                })) {
                                return next()
                            }
                            if (usingItemData.some(function (regex) {
                                    return regex.test(contents)
                                })) {
                                return next()
                            }
                            var matchRaw = contents.match(/^using (.*);/gm);
                            var match = matchRaw[matchRaw.length - 1];
                            contents = contents.replace(/^(using[^;]+;\n)(?!using)/m, match + '\nusing ItemData = LeagueSharp.Common.Data.ItemData;');
                            fs.writeFile(filename, contents, next, function (err) {
                                if (err) throw err;
                                console.log(filename, chalk.green('has been updated.'))
                                next();
                            });
                        })
                    })
                }
            })
            glob('**/*.csproj', function (err, files) {
                if (err) {
                    console.log(err);
                } else {
                    async.map(files, function (arr, next) {
                        fs.readFile(arr, 'utf-8', function (err, contents) {
                            if (err) {
                                console.log(err);
                            } else {
                                /*
                                 var regexOld = /<HintPath>([^<]+)<\/HintPath>/g
                                 var regex = /<HintPath>([^<]*[\\\/])([^\\\/<]*)<\/HintPath>/g
                                 */
                                var regex = /<HintPath>([^<]+)<\/HintPath>/g

                                var newFile = contents.replace(regex, function (match, originalPath) {
                                    if (originalPath.indexOf('\\') !== -1) {
                                        var delimiter = '\\';
                                    } else {
                                        var delimiter = '/';
                                    }
                                    if (config.path.indexOf('\\') !== -1) {
                                        var targetDelimiter = '\\';
                                    } else {
                                        var targetDelimiter = '/';
                                    }
                                    var pathParts = originalPath.split(delimiter);
                                    var filename = pathParts[pathParts.length - 1];
                                    if (config.path.charAt(config.path.length - 1) !== targetDelimiter) {
                                        config.path += targetDelimiter;
                                    }
                                    var newPath = config.path + filename;
                                    return '<HintPath>' + newPath + '</HintPath>';
                                });
                                fs.writeFile(arr, newFile, function (err) {
                                    if (err) throw err;
                                    console.log(arr, chalk.green('has been updated.'));
                                })
                            }
                        })
                    })
                }
            })
        }
    });
}

module.exports = update;
