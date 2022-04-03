import React from "react";
import Button from 'react-bootstrap/Button'
import { Card } from "../card/Card";
import DateTimeDisplay from "../Timer/DateTimeDisplay";
import "./Styles.css"
import moment from 'moment';



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
                        setSeconds(60)
                        setMinutes(previousState => previousState-1)
                    }else{
                        setSeconds(60)
                    }
                    setintervalSession(previousState => previousState-1)
                }
        },1000)
        return () => clearInterval(interval)
    },[intervalSession])

    const initSession = () => {
        setintervalSession(120)
        setHistory(previousState => {
            if(previousState===[]){
                return ['Begins Pomodoro at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())]
            }
            else{
                return previousState.concat(['Begins Pomodoro at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())])
            }     
        })
        setSeconds(60)
        setMinutes(1)

    }
    const initShortBreak = () => {
        setintervalSession(300)
        setHistory(previousState => {
            if(previousState===[]){
               return ['Begins Short Break at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())]
            }
            else{
                return previousState.concat(['Begins Short Break at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())])
            }

        })
        setSeconds(60)
        setMinutes(4)
    }
    const initLongBreak = () => {
        setintervalSession(900)
        setHistory(previousState => {
            if(previousState===[]){
               return ['Begins Long Break at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())]
            }
            else{
                return previousState.concat(['Begins Long Break at '.concat(moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString())])
            }

        })
        setSeconds(60)
        setMinutes(14)
    }

    return(
        <div className="containerPomodoro " >
            <div className="col timer"  >
                <DateTimeDisplay minutes={minutes} seconds={seconds}/>
                <div className=" button">
                        <Button variant="success" size="sm" onClick={initSession}>
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
            <div className="col history" role='log'> 
                {history.length >= 1 ? 
                        history.map((item,index) => <div >  <Card  key={index}>{item}</Card> </div> )
                        :<h2>There is no activity yet started.. </h2>
                }
            </div>
           
        </div>
    )
}