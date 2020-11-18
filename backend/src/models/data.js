const axios = require('axios').default;
const cheerio = require('cheerio');

exports.scrapeMenu = async (letter) => {
    const response = await axios.get(`https://millcantin.hu/shop/napi-menuk/${letter}-menu/`);
    const html = response.data;
    const $ = cheerio.load(html);
    const price = $('div[class="fixed-content"] > a > .price').text();
    const soup = parseSoup($);
    const soupAllergenSRCs = parseSoupAllergenSRCs($);
    const mainCourseAllergenSRCs = parseMainCourseAllergenSRCs($);
    const mainCourse = parseMainCourse($);
    return ({
        letter: letter.toUpperCase(),
        date: new Date(),
        soup: soup,
        soupAllergenSRCs: soupAllergenSRCs,
        mainCourse: mainCourse,
        mainCourseAllergenSRCs: mainCourseAllergenSRCs,
        price: price,
    });
};

const parseSoup = ($) => {
    let soup = 'No soup found';
    $('div[class="fixed-content"] > a > .woocommerce-product-details__short-description > p')
        .each((i, el) => {
            if ($(el).text().toUpperCase().includes('SOUP')) {
                soup = $(el).text();
                return false;
            }
        });
    return soup;
};

const parseMainCourse = ($) => {
    let mainCourse = 'No main course found';
    $('div[class="fixed-content"] > a > .woocommerce-product-details__short-description > p')
        .each((i, el) => {
            if ($(el).text().toUpperCase().includes('MAIN COURSE')) {
                mainCourse = $(el).text();
                return false;
            }
        });
    return mainCourse;
};

/*
This method is based on the assumption that the first child p element of
$('div[class="fixed-content"] > a > .woocommerce-product-details__short-description')
that contains any img element is the one containing the information about
soup allergens.
*/
const parseSoupAllergenSRCs = ($) => {
    allergenSRCs = [];
    $('div[class="fixed-content"] > a > .woocommerce-product-details__short-description > p')
        .each((i, el) => {
            if ($(el).find('img').length > 0) {
                $(el).children('img').each((i, e) => {
                    allergenSRCs.push($(e).attr('data-src'));
                });
                return false;
            }
        });
    return allergenSRCs;
};

/*
This method is based on the assumption that the second child p element of
$('div[class="fixed-content"] > a > .woocommerce-product-details__short-description')
that contains any img element is the one containing the information about
main course allergens.
*/
const parseMainCourseAllergenSRCs = ($) => {
    allergenSRCs = [];
    passedElementContainingSoupAllergens = false;
    $('div[class="fixed-content"] > a > .woocommerce-product-details__short-description > p')
        .each((i, el) => {
            if ($(el).find('img').length > 0) {
                if (passedElementContainingSoupAllergens) {
                    $(el).children('img').each((i, e) => {
                        allergenSRCs.push($(e).attr('data-src'));
                    });
                    return false;
                }
                passedElementContainingSoupAllergens = true;
            }
        });
    return allergenSRCs;
};