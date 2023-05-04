import React, {useState, useEffect} from 'react'
import axios from "axios"

const Pokemonapi = () => {

    const [poke, setPoke] = useState([]);

    useEffect (() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(res => {
        console.log(res);
        setPoke(res.data.results);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <button>Fetch Pokemon</button>
            {poke.map((each, i) => {
                return (
                    <div key={i}>
                        <p>{each.name}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Pokemonapi