import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    wrapper: {
        boxShadow: '0 0 10px rgba(0,0,0,0.2);',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& img': {
            width: '20rem',
            height: '20rem',
            borderRadius: '20rem',
        },
    },
});
const Card = ({ src, name, dob }) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <img src={src} alt="" />
            <Typography variant="h4">{name}</Typography>
            <Typography variant="h6">{dob}</Typography>
        </Box>
    );
};

Card.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    dob: PropTypes.string
};

export default Card;
