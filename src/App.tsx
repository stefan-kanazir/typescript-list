import React, { useState } from 'react';
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

  const [food, setFood] = useState<IState["food"]>([
    {
      title: "Eggs",
      url: "https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1410&q=80",
      calories: 10,
      description: "Egg yolks and whole eggs store significant amounts of protein and choline"
    }
  ])

  return (
    <div className="">
      <h1 className="">Calorie Counter</h1>
      <p className="">Recording your calories as you eat gives you a clearer picture of the calories you are consuming. It also enhances your awareness of food values and nutrient levels, all of which helps you make healthier choices when eating.</p>
      
      <section>
        <List food={food}/>
      </section>
    </div>
  );
}

export default App;
