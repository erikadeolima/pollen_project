import React from "react";
import './Banner.css';

import { Link } from "react-router-dom";

function Banner() {
    return(
        <div className="homepageBanner">
            <div className="bannerHomepageTxt">
                <p>acumule pontos <br/> e troque por produtos <br/> da Bees</p>
                <Link to='/Sobre' className="removeStyle">
                    <label>saiba mais</label>
                </Link>            
            </div>
        </div>
    );
}

export default Banner;