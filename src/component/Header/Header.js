import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './Header.css';

export const Header = (props) => {   
    return (
        <div className="containerHeader ">
            <h1>Welcome to Pomodoro Web</h1>
            <h5 className="h3">A briefly description for you to take the most out of this technique. Reminder of taking a long break after three pomodoros, this will help you a lot during your session.  </h5>
        </div>
    )
}