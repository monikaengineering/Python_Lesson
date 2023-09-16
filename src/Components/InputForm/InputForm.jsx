import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './InputForm.css';

function InputForm () {
  const [City, setCity] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const response = async () => {
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=Phnom Penh&appid=a54b1716f864bb78d3e211aba25d0394';
      const response = await axios.get(url);
      console.log(response.data)

    }
    response();
  },[]);

  return(
    <form>
      <div className="w">

      <button className="btn btn-primary" type="button">Search</button>
      </div>
    </form>
  );
}

export default InputForm;