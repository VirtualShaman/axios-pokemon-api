import React, { useState } from 'react';
import axios from 'axios';

const Pokedex = () => {

    const[allPokemon, setAllPokemon] = useState([])

    const getPokemonInfo = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
            .then(response =>{
                console.log(response.data)
                setAllPokemon(response.data.results)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <button onClick= {getPokemonInfo}>Fetch Pokemon</button>
            {
                allPokemon.map((pokemon, i)=>{
                    return(
                        <div key = {i}>
                            <p>{i+1}.{pokemon.name}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Pokedex;