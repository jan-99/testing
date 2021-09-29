import React, { useState } from "react";
import axios from "axios";

const FoodForm = () => {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = () => {
    console.log(`{foodName: ${foodName}\n days: ${days}}`);
    axios.post("http://localhost:5000/insert", {
      foodName: foodName,
      days: days,
    });
    window.location.reload(false);
  };

  return (
    <>
      <div>
        <h1>CRUD App</h1>
        <label>Food Name</label>
        <input
          type="text"
          placeholder="POTAHTO"
          onChange={(e) => {
            setFoodName(e.target.value);
          }}
        />

        <label>Days Since You Ate</label>
        <input
          type="number"
          onChange={(e) => {
            setDays(e.target.value);
          }}
        />
      </div>
      <button onClick={handleSubmit}>Add To List</button>
    </>
  );
};

export default FoodForm;
