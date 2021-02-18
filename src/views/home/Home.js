import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Card from './Card';

const Home = () => {
    return (
        <Grid container spacing={4}>
            <Grid item md={4} sm={6} xs={12}>
                <Card name="Suman" dob="05/01/1997" src="https://cdn.cdnparenting.com/articles/2020/02/23012833/463272494.jpg" />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Card
                    name="Arti"
                    dob="10/07/1996"
                    src="https://www.thesun.co.uk/wp-content/uploads/2018/08/NINTCHDBPICT000429551345.jpg"
                />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Card
                    name="Pooja"
                    dob="08/04/1996"

                    src="https://cdn2.momjunction.com/wp-content/uploads/2014/05/Nice-And-Beautiful-Baby-Girl-Names-With-Meanings1.jpg"
                />
            </Grid>
        </Grid>
    );
};

Home.propTypes = {};

export default Home;
