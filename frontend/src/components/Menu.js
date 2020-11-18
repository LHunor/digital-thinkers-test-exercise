import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const api = require('../Api.js');

export default () => {
    const [menu, setMenu] = useState(null);
    const { letter } = useParams();

    useEffect(() => {
        api.fetchMenu(letter)
            .then(m => setMenu(m));
    }, [letter]);

    return (
        <>
            {menu &&
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant="h1">
                            {letter.toUpperCase()}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="textSecondary">
                            Date: {menu.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            {menu.soup}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" style={{ display: "inline-block" }}>
                            allergens: {menu.soupAllergenSRCs.map((src, id) => <img src={src} key={id} />)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            {menu.mainCourse}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary">
                            allergens: {menu.mainCourseAllergenSRCs.map((src, id) => <img src={src} key={id} />)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            {menu.price}Ft
                        </Typography>
                    </Grid>
                </Grid>
            }
        </>

    );
}