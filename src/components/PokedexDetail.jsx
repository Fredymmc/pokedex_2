import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const PokedexDetail = () => {

    const { id } = useParams();

    const [ pokemon , setPokemon ] = useState([]);

    const navigate = useNavigate();

   
    
    useEffect(() =>{
        axios.get( `https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res =>setPokemon(res.data) )
        .catch( () => alert("Ese pokemon no existe")   )
    }, [] );

    

    const toBack = () => {        
        navigate( `/pokedex/` )
    }

    return (
        <div className='poxedex_details'>
           
            <h1> {pokemon.name} </h1>
            <div className='poxedex_details_image'>
            <img src={pokemon?.sprites?.other.home.front_default} alt="" />
            </div>
            <br />
            <p> {pokemon?.abilities?.[0]?.ability.name} / {pokemon?.abilities?.[1]?.ability.name} </p> <br />
                 <div className="details_container">
                 <div className="dc1" > <p> BE  </p> <b> {pokemon.base_experience} </b>  </div>
                 <div className="dc2" > <p> height  </p> <b> {pokemon.height} </b> </div>
                 <div className="dc3" > <p> weight  </p> <b> {pokemon.weight} </b> </div>
                 </div>
                <br /> <br />
            <button className='back_button' onClick={toBack} > <i className="fa-solid fa-arrow-left"></i>   BACK </button>

        </div>
    );
};

export default PokedexDetail;