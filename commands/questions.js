'use strict';
var questions = [
    {
        type: 'list',
        name: 'category',
        message: 'What would you like to create?',
        choices: [
            'Champion assembly',
            'Utility assembly'
        ]
    },
    {
        type: 'list',
        name: 'championletter',
        message: 'Champion name starts with:',
        choices: [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        when: function (answers) {
            return answers.category === 'Champion assembly';
        }
    },
    {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
        'Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Ashe',
        'Azir'
    ], when: function (answers) { return answers.championletter === 'A'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Bard', 'Blitzcrank', 'Brand', 'Braum'
        ], when: function (answers) { return answers.championletter === 'B'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Caitlyn', 'Cassiopeia', 'Cho\'Gath', 'Corki'
        ], when: function (answers) { return answers.championletter === 'C'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Darius', 'Diana', 'Dr. Mundo', 'Draven'
        ], when: function (answers) { return answers.championletter === 'D'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Elise', 'Ekko', 'Evelynn', 'Ezreal'
        ], when: function (answers) { return answers.championletter === 'E'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Fiddlesticks', 'Fiora', 'Fizz', 'Miss Fortune'
        ], when: function (answers) { return answers.championletter === 'F'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves'
        ], when: function (answers) { return answers.championletter === 'G'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Hecarim', 'Heimerdinger'
        ], when: function (answers) { return answers.championletter === 'H'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Irelia'
        ], when: function (answers) { return answers.championletter === 'I'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jinx'
        ], when: function (answers) { return answers.championletter === 'J'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle',
            'Kennen', 'Kha\'Zix', 'Kog\'Maw'
        ], when: function (answers) { return answers.championletter === 'K'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'LeBlanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux'
        ], when: function (answers) { return answers.championletter === 'L'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune',
            'Mordekaiser', 'Morgana', 'Dr. Mundo'
        ], when: function (answers) { return answers.championletter === 'M'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Nami', 'Nasus', 'Nautilus', 'Nidalee', 'Nocturne', 'Nunu'
        ], when: function (answers) { return answers.championletter === 'N'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Olaf', 'Orianna'
        ], when: function (answers) { return answers.championletter === 'O'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Pantheon', 'Poppy'
        ], when: function (answers) { return answers.championletter === 'P'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Quinn'
        ], when: function (answers) { return answers.championletter === 'Q'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Rammus', 'Rek\'Sai', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze'
        ], when: function (answers) { return answers.championletter === 'R'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Sejuani', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir',
            'Skarner', 'Sona', 'Soraka', 'Swain', 'Syndra'
        ], when: function (answers) { return answers.championletter === 'S'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle',
            'Tryndamere', 'Twisted Fate', 'Twitch'
        ], when: function (answers) { return answers.championletter === 'T'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Udyr', 'Urgot'
        ], when: function (answers) { return answers.championletter === 'U'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Varus', 'Vayne', 'Veigar', 'Vel\'Koz', 'Vi', 'Viktor', 'Vladimir',
            'Volibear'
        ], when: function (answers) { return answers.championletter === 'V'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Warwick', 'Wukong'
        ], when: function (answers) { return answers.championletter === 'W'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Xerath', 'Xin Zhao'
        ], when: function (answers) { return answers.championletter === 'X'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Yasuo', 'Yorick', 'Master Yi'
        ], when: function (answers) { return answers.championletter === 'Y'; }
    }, {
        type: 'list', name: 'championname', message: 'Choose champion:', choices: [
            'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zyra'
        ], when: function (answers) { return answers.championletter === 'Z'; }
    }, {
        type: 'input',
        name: 'name',
        message: 'Title:',
        validate: function( value ) {
            var title = value.match(/^[A-Z][a-zA-Z]+$/mg);
            if (title) {
                return true;
            } else {
                return "Please enter a valid name.";
            }
        },
        when: function (answers) {
            return answers.category === 'Utility assembly';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description:',
        when: function (answers) {
            return answers.category === 'Utility assembly' || (answers.category === 'Champion assembly');
        }
    },
    {
        type: 'input',
        name: 'version',
        message: 'Assembly version:',
        validate: function( value ) {
            var version = value.match(/\d{1,3}\.\d{1,3}\.\d{1,3}/i);
            if (version) {
                return true;
            } else {
                return 'Example: 0.0.1';
            }
        },
        default: function () { return '0.0.1'; },
        when: function (answers) {
            return answers.category === 'Utility assembly' || (answers.category === 'Champion assembly');
        }
    },
    {
        type: 'checkbox',
        name: 'draw',
        message: 'Draw:',
        choices: [
            {
                name: 'Q',
                checked: true
            },
            {
                name: 'W',
                checked: true
            },
            {
                name: 'E',
                checked: true
            },
            {
                name: 'R',
                checked: true
            }
        ],
        when: function (answers) {
            return answers.category === 'Champion assembly';
        }
    }
]

module.exports = questions;