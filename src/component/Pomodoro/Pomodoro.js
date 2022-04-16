import React from "react";
import Button from 'react-bootstrap/Button'
import { Card } from "../card/Card";
import DateTimeDisplay from "../Timer/DateTimeDisplay";
import "./Styles.css"
import moment from 'moment';
import { 
    INTERVAL_IT_LAST_POMODORO_SECONDS,
    INTERVAL_IT_LAST_SHORT_BREAK_SECONDS,
    MINUTES_LAST_LONG_BREAK, 
    MINUTES_LAST_POMODORO, 
    MINUTES_LAST_SHORT_BREAK, 
    SECONDS,
    INTERVAL_IT_LAST_LONG_BREAK_SECONDS
} from "../helpers/utils";



export const Pomodoro = () => {
    const [intervalSession,setintervalSession] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [history, setHistory] = React.useState([])

    React.useEffect(()=>{  
        const interval = setInterval(()=>{      
                if(intervalSession >= 0){
                    if(seconds > 0){
                        setSeconds(previousState => previousState-1)
                    }else if(minutes > 0){
                        setSeconds(SECONDS)
                        setMinutes(previousState => previousState-1)
                    }else{
                        setSeconds(SECONDS)
                    }
                    setintervalSession(previousState => previousState-1)
                }
        },1000)
        return () => clearInterval(interval)
    },[intervalSession])

    const initSession = () => {
        setintervalSession(INTERVAL_IT_LAST_POMODORO_SECONDS)
        setHistory(previousState => {
            if(previousState===[]){
                return ['Begins Pomodoro at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())]
            }
            else{
                return previousState.concat(['Begins Pomodoro at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())])
            }     
        })
        setSeconds(SECONDS)
        setMinutes(MINUTES_LAST_POMODORO)

    }
    const initShortBreak = () => {
        setintervalSession(INTERVAL_IT_LAST_SHORT_BREAK_SECONDS)
        setHistory(previousState => {
            if(previousState===[]){
               return ['Begins Short Break at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())]
            }
            else{
                return previousState.concat(['Begins Short Break at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())])
            }

        })
        setSeconds(SECONDS)
        setMinutes(MINUTES_LAST_SHORT_BREAK)
    }
    const initLongBreak = () => {
        setintervalSession(INTERVAL_IT_LAST_LONG_BREAK_SECONDS)
        setHistory(previousState => {
            if(previousState===[]){
               return ['Begins Long Break at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())]
            }
            else{
                return previousState.concat(['Begins Long Break at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())])
            }

        })
        setSeconds(SECONDS)
        setMinutes(MINUTES_LAST_LONG_BREAK)
    }

    return(
        <div className="containerPomodoro">
            <div className="col timer"  >
                <DateTimeDisplay minutes={minutes} seconds={seconds}/>
                <div className=" button">
                        <Button variant="success" size="sm"  onClick={initSession}>
                            Start Pomodoro 
                        </Button>{' '}
                        <Button variant="primary" size="sm" onClick={initShortBreak}>
                            Start Short Break 
                        </Button>{' '}
                        <Button variant="warning" size="sm" onClick={initLongBreak}>
                            Start Long Break 
                        </Button>{' '}
                </div>
                   
            </div>
            <section className="col history" role='log'> 
                {history.length >= 1 ? 
                        history.map((item,index) => <div > <Card className='card' key={index}>{item}</Card> </div> )
                        :<h2>There is no activity yet started.. </h2>
                }
            </section>       
        </div>
    )
}