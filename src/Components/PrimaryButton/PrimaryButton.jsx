import React from "react";
import './PrimaryButton.css';
import { Link } from "react-router-dom";

function PrimaryButton(props) {
    return(
        <div className="primaryButton">
           <Link><button>{props.btn}</button></Link>
        </div>
    );
}

export default PrimaryButton;