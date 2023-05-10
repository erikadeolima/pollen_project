import React from 'react';
import './Homepage.css';
import Banner from '../../Components/Banner/Banner';
import CardPhotoProduct from '../../Components/CardPhotoProduct/CardPhotoProduct';

function Homepage() {

    return (
        <div>
            <Banner />
            <CardPhotoProduct />
        </div>
    )
};

export default Homepage