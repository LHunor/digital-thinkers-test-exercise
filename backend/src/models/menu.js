const data = require('../models/data.js');

const Menu = {};

Menu.findByLetter = (letter, result) => {
    const menu = data.find(
        m => m.letter.toLowerCase() === letter.toLowerCase());
    if (typeof menu == "undefined") {
        return result(null, `Error: No menu found in data with letter ${letter}.`);
    }
    result(menu, null);
};

module.exports = Menu;