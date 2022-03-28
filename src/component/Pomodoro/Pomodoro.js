import React from "react";
import Button from 'react-bootstrap/Button'
import DateTimeDisplay from "../Timer/DateTimeDisplay";
import "./Styles.css"



export const Pomodoro = (props) => {
    const [intervalSession,setintervalSession] = React.useState(0)
    const [seconds, setSeconds] = React.useState(60)
    const [minutes, setMinutes] = React.useState(0)
    const [sessionActive,setSessionActive] = React.useState(false)

    React.useEffect(()=>{
        let interval
        if(sessionActive){
            interval = setInterval(()=>{      
                if(intervalSession>=0){
                    if(seconds > 0){
                        setSeconds(previousState => previousState-1)
                    }else{
                        setSeconds(60)
                        setMinutes(previousState => previousState-1)
                    }
                    setintervalSession(previousState => previousState-1)
                }
            },1000)
        }
        return () => clearInterval(interval)
    },[intervalSession,sessionActive])

    const initSession = () => {
        setintervalSession(120)
        setMinutes(1)
        setSessionActive(true)
    }
    const initShortBreak = () => {
        setintervalSession(300)
        setMinutes(5)
        setSessionActive(true)
    }
    const initLongBreak = () => {
        setintervalSession(900)
        setMinutes(15)
        setSessionActive(true)
    }

    return(
        <div className="containerPomodoro " style={{display:'flex',alignItems:'center' , justifyContent:'center'}}>
            <div className="col" >
               
                    <DateTimeDisplay minutes={minutes} seconds={seconds}/>
                    <div className="col button">
                        <Button variant="primary" size="sm" onClick={initSession}>
                            Start Pomodoro 
                        </Button>{' '}
                        <Button variant="primary" size="sm" onClick={initShortBreak}>
                            Start Short Break 
                        </Button>{' '}
                        <Button variant="primary" size="sm" onClick={initLongBreak}>
                            Start Long Break 
                        </Button>{' '}
                    </div>
            
            </div>
            <div className="col"> Aqui va la siguiente columna</div>
        </div>
    )
}