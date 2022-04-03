import React from "react";
import './Style.css'

export const Card = (props) => {
    return(
        <div className="containerCard">
            <h6>{props.children}</h6>
        </div>
    )
}