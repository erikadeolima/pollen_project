import React from "react";
import './PrimaryButton.css';

import { Link } from "react-router-dom";

function PrimaryButton(props) {
    return(
        <div className="primaryButton">
            <button>{props.btn}</button>
        </div>
    );
}

export default PrimaryButton;