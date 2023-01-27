import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import pokedexImg3 from '../assets/ash_y_pik.png';

const InputName = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue ] = useState("");

    const navigate = useNavigate();

    const clickButton = () => {
        dispatch(changeUserName(inputValue));
        navigate("/pokedex");
      };

      

    return (
        <div  className="Pokedex_container1">

          <div className="header_input">
             <h1>Hello pokemon lover </h1>

             <div className="header_input_img">
             <img src={pokedexImg3} alt="" />
             </div>
             </div>
             <p className="header_input_p" >write your name to start</p>
      <input
       className="header_input_input"
        type="text"
        placeholder='write your name'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
            
            <button 
              className="header_input_button"
              onClick={clickButton}> 
              <i className="fa-solid fa-paper-plane"></i> 
            </button>
                 
   
        </div>
    );
};

export default InputName;