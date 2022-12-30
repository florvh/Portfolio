import React, {useState} from "react";
import styles from "./CounterList.module.css";

const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);
    
    const addCounter = () => {
        setCounters([...counters, 0]);
    }

    const increaseCounter = (index: number) => {
        let counterCpy = [...counters.slice(0, index), counters[index] + 1, ...counters.slice(index + 1)];
        setCounters(counterCpy);
    }

    const decreaseCounter = (index: number) => {
        let counterCpy = [...counters.slice(0, index), counters[index] - 1, ...counters.slice(index + 1)];
        setCounters(counterCpy);
    }

    return (
        <div className={styles.CounterList}>
            <h1>Counter List</h1>
            <p>In this assignment it was the goal to create a button that would make 1 or more counters with the function of counting op or down<br></br>
            and at the bottom you can see the total number across all counters</p>
            <>
                {counters.map((counter, index) => {
                    let color = 'black';
                    if (counter > 0) {
                        color = 'green';
                    } else if (counter < 0) {
                        color = 'red';
                    }
                    return (
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent:"center"}}>
                            <button onClick={() => decreaseCounter(index)}>Omlaag</button>
                            <div style={{flex: 1, display: "flex", justifyContent: "center", alignItems:"center", color: color}}>Count: {counter}</div>
                            <button onClick={() => increaseCounter(index)}>Omhoog</button>
                        </div>    
                    )
                })}
                <p>Som van de tellers: {counters.reduce((prev, curr) => prev + curr, 0)}</p>
                <button onClick={addCounter}>Voeg teller toe</button>
            </>
        </div>
    )

}

const App = () => {
    return (
        <div>
            <CounterList />
        </div>
    )


}

export default App;