import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './InputForm.css';

function InputForm () {
  const [City, setCity] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const response = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}`;
      const {data} = await axios.get(url);

    }
    response();
  },[]);

  return(
    <form>
      <div className="w">
      <input 
      type = "text"
      value = {name}
      placeholder="Enter your city"
      onChange={ handleChange }
      />
      <button className="btn btn-primary" type="button">Search</button>
      </div>
    </form>
  );
}

export default InputForm;