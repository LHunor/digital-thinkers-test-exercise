const Menu = require('../models/menu.js');

exports.findOne = (req, res) => {
    Menu.findByLetter(req.params.letter, (menu, err) => {
        if (err) {
            console.log('Error while retrieving menu by letter.', err);
            return res.status(400).send({ message: 'An error occured...' });
        }
        res.status(200).send({ menu });
    });
};