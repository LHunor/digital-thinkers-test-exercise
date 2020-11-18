const data = require('../models/data.js');

const Menu = {};

Menu.findByLetter = (letter, result) => {
    data.scrapeMenu(letter).then(menu => {
        result(menu, null);
    });
};

module.exports = Menu;