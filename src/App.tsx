import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"

interface IState {
  food: {
    title: string
    url: string
    calories: number
    description?: string
  }[]
}

function App() {

  const [food, setFood] = useState<IState["food"]>([])

  return (
    <div className="App">
      <h1>Calorie Counter</h1>
      <p>Recording your calories as you eat gives you a clearer picture of the calories you are consuming. It also enhances your awareness of food values and nutrient levels, all of which helps you make healthier choices when eating.</p>
      
      <section>
        <List food={food} />
      </section>
    </div>
  );
}

export default App;
