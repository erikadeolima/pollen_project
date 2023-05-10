import React from 'react';
import './Homepage.css';
import Banner from '../../Components/Banner/Banner';
import FormEntrega from '../../Components/FormEntrega/FormEntrega';

function Homepage() {
    return(
        <div>
            <Banner
            />

            <FormEntrega />
        </div>
    )
};

export default Homepage