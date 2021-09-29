import React from "react";
import "./App.css";

// Components
import FoodForm from "./components/FoodForm";
import FoodList from "./components/FoodList";

function App() {
  return (
    <div className="App">
      <FoodForm />
      <FoodList />
    </div>
  );
}

export default App;
