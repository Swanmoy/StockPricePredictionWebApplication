import "./App.css";

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [stock, setStock] = useState("");
  const [duration, setDuraton] = useState(1);
  const [output, setOutput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stock);
    axios
      .get("http://localhost:5001/getPrediction", {
        params: { company: stock, duration: duration },
      })
      .then((resp) => {
        console.log(resp.data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Stock Price Prediction Application</h1>
      <form onSubmit={handleSubmit}>
        <label for='stock'>Stock: </label>
        <select
          name='stock'
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
        >
          <option selected value=''></option>
          <option value='Microsoft'>Microsoft</option>
          <option value='Google'>Google</option>
        </select>
        <br />
        <label for='duration'>Duration: </label>
        <input
          type='number'
          name='duration'
          value={duration}
          onChange={(e) => {
            setDuraton(e.target.value);
          }}
        />
        <input type='submit' value='Get Prediction' />
      </form>
      <p>{output}</p>
    </>
  );
}

export default App;
