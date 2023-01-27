import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [ pokemon, setPokemon ] = useState({});

    const navigate = useNavigate();    
    
    useEffect(() =>{
        axios.get(url)
        .then(res =>setPokemon(res.data) )
    }, [] );

  
    

    return (
        <div className='card' onClick={ () => navigate( `/pokedex/${pokemon.id}`) } >
            <div className="color_fondo"></div>
           <img src={pokemon.sprites?.other?.home.front_default} alt="" />    
            <h1> {pokemon.name} </h1> 
                   
                <p> {pokemon?.abilities?.[0]?.ability.name} / {pokemon?.abilities?.[1]?.ability.name} </p>
                <p> base_experience <b> {pokemon.base_experience} </b> </p>
                <p> height <b> {pokemon.height} </b> </p>
                <p> weight <b> {pokemon.weight} </b> </p>

           
            
            {/* <img src={pokemon.sprites.front_default} alt="" /> */}
                    
        </div>
    );
};

export default PokemonCard;