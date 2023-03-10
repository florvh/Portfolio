import React, {useState, useEffect} from "react";
import { ColorRing } from  'react-loader-spinner'
import styles from './Pokemon.module.css';

const LoadingIndicator = () => {
    return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
    )
}
export interface Pokedex {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

interface PokedexProps {
    limit: number
}

const Pokedex = ({limit}: PokedexProps) => {
    const [results, setResults] = useState<Result[]>([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        (async() => {
            setLoading(true);
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            let data : Pokedex = await response.json();
            console.log(data);
            setResults(data.results);
            setLoading(false);
        })();
        
    }, [limit]);

    if (loading) {
        return <div><LoadingIndicator /></div>
    }

    return (  
        <>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)}/>
            {results.filter(result => result.name.startsWith(filter)).map((result, index) => (
                <div key={index}>{result.name}</div>
            ))}
        </>
    )
}


const App = () => {
    const [limit, setLimit] = useState(10);

    const [selectedLimit, setSelectedLimit] = useState(10);

    return (
        <div className={styles.Pokemon}>
            <h1>Pokemon</h1>
            <p>In this assignment it was the goal to create a list of pokemon shows pokemon acording to the amount you want to show <br />and also make a filter to look for a specific one</p>
            <>
                <Pokedex limit={selectedLimit}/>
                <input type="number" onChange={(e) => setLimit(parseInt(e.target.value))} value={limit}/><button onClick={() => setSelectedLimit(limit)}>Set Limit</button>

            </>
        </div>
    )
}

export default App;