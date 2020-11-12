const axios = require('axios').default;

const url = 'http://localhost:8080';

exports.fetchMenu = async (letter) => {
    const res = await axios.get(`${url}/api/menus/${letter}`);
    return res.data.menu;
};