import React from "react";
import './PrimaryButton.css';

function PrimaryButton(props) {
    return(
        <div className="primaryButton">
            <button>{props.btn}</button>
        </div>
    );
}

export default PrimaryButton;