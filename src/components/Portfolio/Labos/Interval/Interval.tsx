import React, {useState, useEffect} from "react";
import styles from './Interval.module.css';

const Timer = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let handle = setInterval(() => {
            setTimer(number => number + 1);
        }, 1000);
        return () => { clearInterval(handle); }
    }, []);   

    return (
        <div>{timer}</div>
    );
}

const CurrentTime = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        let handle = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => { clearInterval(handle); }
    }, []);
    return (
        <div>Current time: <b>{date.toLocaleTimeString()}</b></div>
    )
}

interface RandomValueProps {
    min: number;
    max: number;
}

const RandomValue = ({min, max} : RandomValueProps) => {
    const [randomValue, setRandomValue] = useState(0);
    useEffect(() => {
        let handle = setInterval(() => {
            setRandomValue(Math.floor(Math.random() * (max - min)) + min);
        }, 2000);
        return () => { clearInterval(handle); }
    }, []);

    return (
        <div>Random value between {min} and {max}: {randomValue}</div>
    )
}

const Interval = () => {
    return (
        <div className={styles.Interval}>
            <h1>Interval</h1>
            <p>In this assignment it was the goal to create few things on a interval like a random number, update the current time <br /> a random number between 1 and 100 and a random value between 100 and 200</p>
        <>
            <Timer/>
            <CurrentTime/>
            <RandomValue min={1} max={100}/>
            <RandomValue min={100} max={200}/>
        </>
        </div>
    )
}

const App = () => {
    return (
        <Interval/>
    )
}

export default App;