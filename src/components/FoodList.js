import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodList = () => {
  const [foodList, setFoodList] = useState([]);
  const [newFoodName, setNewFoodName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      setFoodList(res.data);
    });
  }, []);

  const updateFood = (id) => {
    axios.put("http://localhost:5000/update", {
      id: id,
      newFoodName: newFoodName,
    });
    window.location.reload(false);
  };

  const deleteFood = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`);
    window.location.reload(false);
  };

  return (
    <div>
      {foodList.map((val, key) => {
        return (
          <div key={key}>
            <h1>{val.foodName}</h1>
            <h4>{val.daysSinceIAte}</h4>
            <input
              type="text"
              placeholder="New Food Name"
              onChange={(e) => {
                setNewFoodName(e.target.value);
              }}
            />
            <button onClick={() => updateFood(val._id)}>Edit</button>
            <button onClick={() => deleteFood(val._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;
