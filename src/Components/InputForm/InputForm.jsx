import React from "react";
import './InputForm.css';

import search_icon from '../Assets/search-icon.png';

function InputForm () {
  return(
    <div class = "container">
      <input 
      type = "text"
      placeholder="Enter your city"
      />
      <img className = 'search' src={search_icon} alt = 'search_icon'/>
    </div>
  );
}

export default InputForm;