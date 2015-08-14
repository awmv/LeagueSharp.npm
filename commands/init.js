'use strict';
var inquirer = require('inquirer');
var osenv = require('osenv');
var fs = require('fs');
var path = require('path');
var lsharp = path.join(osenv.tmpdir(), 'leaguesharp.json');
var chalk = require('chalk');
var figures = require('figures');
var warning = chalk.magenta;
var mkdirp = require('mkdirp');
var warning = chalk.magenta;
var success = chalk.green;
var pathToAssemblyInfo = path.join(__dirname, 'templates', 'AssemblyInfo.tpl');
var pathToCsproj = path.join(__dirname, 'templates', 'csproj.tpl');
var App = '<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<configuration>\n    <startup> \n        <supportedRuntime version=\"v4.0\" sku=\".NETFramework,Version=v4.5\" \/>\n    <\/startup>\n<\/configuration>';
var questions = require(path.join(__dirname, 'questions.js'));
var champions = require(path.join(__dirname, 'champions.js'));
var ejs = require('ejs');

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
var uuid = guid();

var done = [
    {
        type: 'list',
        name: 'yesorno',
        message: 'Looks good?',
        choices: [
            'Yes',
            'No'
        ]
    }
]

var init = function () {

    fs.exists(lsharp, function (exists) {
        if (!exists) {
            console.log(warning(chalk.cyan(figures.warning), 'Please set your path using ' + '\'' + chalk.underline.cyan('lsharp system') + '\'' + '.'));
        } else {
            var config = require(lsharp);
            inquirer.prompt(questions, function (answers) {
                if (answers.category === 'Champion assembly') {
                    answers.championname = answers.championname.replace(/'/g, '').replace(/\./g, '').replace(/ /g, '');

                    var myJson = champions(answers.championname);
                    if (typeof myJson !== 'undefined' && myJson) {
                        var publicSpells = 'public static Spell' + ' ' + (Object.keys(myJson.Spells).join(', ')) + ';';
                        var spellArray = function() {
                            var returnValue = '';
                            for (var spell in myJson.Spells) {
                                if (myJson.Spells.hasOwnProperty(spell)) {
                                    returnValue += spell + ' = ' + myJson.Spells[spell].attr + ';\n\t\t\t';
                                } else {
                                    console.log('Champion is not yet set.');
                                }
                            };
                            return returnValue;
                        };
                        var skillArray = function () {
                            var returnValue = '';
                            for (var skill in myJson.Skills) {
                                if (myJson.Spells.hasOwnProperty(skill)) {
                                    returnValue += skill + '.' + myJson.Skills[skill].attr + ';\n\t\t\t';
                                } else {
                                    console.log('Champion is not yet set.');
                                }
                            };
                            return returnValue;
                        };
                    } else {
                        console.log('Your champions is currently not supported.')
                    }
                }

                console.log( chalk.cyan(JSON.stringify(answers, null, '  ')
                    .replace(/"category"/g, chalk.green('Category'))
                    .replace(/"championname"/g, chalk.green('Champion'))
                    .replace(/"description"/g, chalk.green('Description'))
                    .replace(/"version"/g, chalk.green('Version'))
                    .replace(/"draw"/g, chalk.green('Draw'))
                    .replace(/"championletter": "[A-Z]",\s*/g, '')
                    .replace(/"name"/g, chalk.green('Name'))
                    .replace(/"/g, '\'')
                    .replace(/(?:[',{}\]:]|\[(?!\d+m))/g, chalk.white('$&')))
                );

                inquirer.prompt(done, function( result ) {
                    if (result.yesorno === 'Yes') {
                        fs.exists((answers.championname || answers.name), function (exists) {
                            if (exists) {
                                console.log(warning(figures.cross), (answers.championname || answers.name) + warning(' already exists.'));
                            } else {
                                mkdirp((answers.championname || answers.name), function (err) {
                                    if (err) {
                                        console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                                    } else {
                                        console.log(chalk.green(chalk.cyan(figures.tick), (answers.championname || answers.name), 'has been created.'));
                                    }
                                });

                                fs.readFile(pathToCsproj, function (err, data) {
                                    if (err) {
                                        console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                                    } else {
                                        var dataForCsproj = data.toString();
                                    }

                                    dataForCsproj = dataForCsproj.replace(/{{Title}}/g, (answers.championname || answers.name)).replace(/{{Guid}}/g, uuid).replace(/{{SystemPath}}/g, config.path + path.sep);

                                    fs.writeFile(path.join((answers.championname || answers.name), (answers.championname || answers.name) + '.csproj'), dataForCsproj, function (err) {

                                        if (err) {
                                            console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                                        } else {
                                            //console.log(success(figures.tick), path.join((answers.championname || answers.name), (answers.championname || answers.name) + '.csproj') + success(' has been created.'));
                                        }
                                    });
                                });

                                fs.writeFile(path.join((answers.championname || answers.name), 'App.config'), App, function (err) {
                                    if (err) {
                                        console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                                    }
                                    //console.log(success(figures.tick), path.join((answers.championname || answers.name), 'App.config') + success(' has been created.'));
                                });

                                mkdirp(path.join((answers.championname || answers.name), 'Properties'), function (err) {
                                    if (err) {
                                        console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                                    } else {
                                        //console.log(success(figures.tick), path.join((answers.championname || answers.name), 'Properties') + success(' has been created.'));
                                    }
                                });

                                fs.readFile(pathToAssemblyInfo, function (err, data) {

                                    if (err) {
                                        console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                                    } else {
                                        var dataOfAssemblyInfo = data.toString();
                                    }

                                    dataOfAssemblyInfo = dataOfAssemblyInfo.replace(/{{Title}}/g, (answers.championname || answers.name)).replace(/{{Description}}/g, answers.description).replace(/{{Version}}/g, answers.version).replace(/{{Guid}}/g, uuid);

                                    fs.writeFile(path.join((answers.championname || answers.name), 'Properties', 'AssemblyInfo.cs'), dataOfAssemblyInfo, function (err) {

                                        if (err) {
                                            console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                                        } else {
                                            //console.log(success(figures.tick), path.join((answers.championname || answers.name), 'Properties', 'AssemblyInfo.cs') + success(' has been created.'));
                                        }
                                    });
                                });

                                var options = {};
                                if (answers.category === 'Champion assembly') {
                                    var str = fs.readFileSync(path.join(__dirname, 'templates', 'Program.ejs'), 'utf-8', function (err, data) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            var data = data.toString();
                                        }
                                    });
                                    var data = {
                                        cat: answers.category,
                                        champion: answers.championname,
                                        title: answers.name,
                                        orb: answers.orbwalker,
                                        spells: publicSpells,
                                        spell: spellArray(),
                                        skill: skillArray(),
                                        draw: answers.draw
                                    }
                                } else {
                                    var str = fs.readFileSync(path.join(__dirname, 'templates', 'Program2.ejs'), 'utf-8', function (err, data) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            var data = data.toString();
                                        }
                                    });
                                    var data = {
                                        cat: answers.category,
                                        champion: answers.championname,
                                        title: answers.name,
                                        orb: answers.orbwalker
                                    }
                                }
                                var template = ejs.compile(str, options);
                                template(data);

                                var rResult = ejs.render(str, data, options);
                                fs.writeFile(path.join((answers.championname || answers.name), 'Program.cs'), rResult, function (err) {

                                    if (err) {
                                        console.log(warning(figures.cross, chalk.cyan('[') + err + chalk.cyan(']')));
                                    } else {
                                        //console.log(success(figures.tick), path.join((answers.championname || answers.name), 'Program.cs') + success(' has been created.'));
                                    }
                                });
                            }
                        })
                    }
                    if (result.yesorno === 'No') {
                        console.log(warning(figures.cross, 'Ohh :('));

                    }
                });


            });

        }
    });
}

module.exports = init;