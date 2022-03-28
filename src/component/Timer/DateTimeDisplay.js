import React from 'react';
import "./Styles.css"

const DateTimeDisplay = ({ minutes, seconds, type }) => {
  return (
    <div className='containerDateTimeDisplay  '>
        <div className='timerdiv'>
            <div className=' firstCol col'>
                <div className=' row'>
                    <h3 className='h3'>{minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</h3>
                    <h4>Minutes</h4>
                </div>
            </div>
            <h1 className='h1'>:</h1>
            <div className=' secondCol col'>
                <div className=' row'>
                    <h3 className='h3'>{seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</h3>
                    <h4>Seconds</h4>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DateTimeDisplay;