import React from 'react';

const GalleryCard = ({ name, image }) => {
    return (
        <div className="card">
            <h1>{name}</h1>
            <img src={image} alt=""/>
        </div>
    );
};

export default GalleryCard;
