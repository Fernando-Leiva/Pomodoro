
import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";

export const Counter = (props) =>{
    return(
        <div>
            <DateTimeDisplay value={props.minutes} type={'Mins'}  />
            <DateTimeDisplay value={props.seconds} type={'Seconds'} />
        </div>
    )
}