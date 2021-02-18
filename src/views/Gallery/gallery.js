import React from 'react';
import './style.css';
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    return (
        <div className="wrapper">
            {/* first row */}
            <GalleryCard name="suman" image="https://i.pinimg.com/originals/14/6e/d2/146ed24db633e64f81bf83f632ed90a9.jpg"/>
            <GalleryCard name="Gyanendra" image="https://i.pinimg.com/originals/8e/47/d0/8e47d0bd73dafa1d339cb2b2b13c2b7e.jpg"/>
            <GalleryCard name="Arti" image="https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/3f676bf9c56af13d13b46e21a42be9a4.jpeg"/>

            {/* second row */}
            <GalleryCard name="Arpit" image="https://i.pinimg.com/236x/86/30/62/863062957a9d0e0aae892cbeb2935928.jpg"/>
            <GalleryCard name="Govind" image="https://i.pinimg.com/236x/0a/fb/61/0afb613e53af384e9f2fd7331924b8e2.jpg"/>
            <GalleryCard name="Raju" image="https://i.pinimg.com/236x/b5/f6/4d/b5f64d6738e63b2dd6920b2f8da7445f.jpg"/>
        </div>
    );
}

export default Gallery;
