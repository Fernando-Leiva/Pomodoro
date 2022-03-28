import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './Header.css';

export const Header = (props) => {   
    return (
        <div className="containerHeader ">
            <h1>Welcome to Pomodoro Web</h1>
            <h5 className="h3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </h5>
        </div>
    )
}