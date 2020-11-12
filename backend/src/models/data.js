const data = [
    {
        id: 0,
        letter: 'A',
        price: 1350,
        date: new Date("2020-11-12"),
        soup: {
            description: {
                hun: 'Májgaluska leves_kis adag',
                eng: 'Liver dumpling soup_small'
            },
            allergens: [
                'celery',
                'egg',
                'gluten'
            ]
        },
        mainCourse: {
            description: {
                hun: 'Sárgaborsófőzelék, feltét',
                eng: 'Yellow bean pottage'
            },
            allergens: [
                'celery',
                'lactose'
            ]
        }
    },
    {
        id: 1,
        letter: 'B',
        price: 1450,
        date: new Date("2020-11-12"),
        soup: {
            description: {
                hun: 'Sütőtök krémleves_kis adag',
                eng: 'Pumpkin cream soup_small'
            },
            allergens: [
                'celery',
                'lactose'
            ]
        },
        mainCourse: {
            description: {
                hun: 'Sertés szelet pikáns raguval, rizs',
                eng: 'Pork chop, rice'
            },
            allergens: [
                'celery',
                'lactose'
            ]
        }
    }
];

module.exports = data;