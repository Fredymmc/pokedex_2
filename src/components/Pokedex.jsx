import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import pokedexImg from '../assets/pokedexname1.png';
import pokedexImg2 from '../assets/pokeball.png';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);

    const [ pokemon , setPokemon ] = useState([]);
    const [ inputSearch , setInputSearch ] = useState("");
    const [ typePokemon, setTypePokemon ] = useState([]);


    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res =>setPokemon(res.data.results) )

        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res =>setTypePokemon(res.data.results) )

    }, [] );

const [page,setPage] = useState(1);
const pokemonPerPage = 8;
const lasttIndex = page * pokemonPerPage ;
const firstIndex = lasttIndex - pokemonPerPage ;
const pokemonsPagination = pokemon.slice(firstIndex,lasttIndex);
const totalPages = Math.ceil(pokemon?.length/pokemonPerPage) ;
const pages = []

for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
    
}

    const search = () => {        
        navigate( `/pokedex/${inputSearch}` )
    }

    const filterType = (e) => {           
            axios.get(e.target.value)
            .then(res => setPokemon(res.data.pokemon) );
            setPage(1);
    }
       
    return (

        <div className="Pokedex_container">

            <div className="header_pokedex">            
            <img className="pokedexname" src={pokedexImg} alt="" />
            <img className="pokeball" src={pokedexImg2}  alt="" />
                
            </div>

            <div className="Pokedex">
            
            <p className="pokedex_p">  <span>  welcome {userName}</span> here you can find your favorite pokemon </p>
            
            <div className="pokedex_botones">
            <div>
            <input

                type="text" 
                placeholder='Search Pokemon' 
                value={inputSearch}
                onChange={e => setInputSearch(e.target.value)}
            />
            <button onClick={search} > search</button>
            </div>
            <div>
                <select onChange={filterType} name="" id="">                
                    { typePokemon.map((typePokemon) => (                   
                         <option value={typePokemon.url} key={typePokemon.url} > {typePokemon.name} </option>
                    ) )}                  
                </select>
            </div>
            </div>

            

            <div className='pokemon_list' >
                {
                    pokemonsPagination.map(pokemon => (
                        <PokemonCard  
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url } 
                        url={pokemon.url ? pokemon.url : pokemon.pokemon.url }                         
                        />                        
                    ))
                }
            </div>

            <div className='pokedex_navigation' >
                <button 
                onClick={() => setPage(page+1) }
                disabled={page === totalPages} > 
                   
                   <i className="fa-solid fa-caret-left"></i>
                </button>
                {
                    pages.map(number => 
                        <button  key={number} onClick={() => setPage(number)} >    
                        {number} 
                        </button> )
                }
                <button onClick={() => setPage(page-1) }
                disabled={page === 1} > 
                    <i className="fa-solid fa-caret-right"></i>
                </button>
               
            </div>

            </div>
        </div>
    );
};

export default Pokedex;