import React, { useState } from 'react';
import './index.css';
import List from "./components/List"
import AddToList from './components/AddToList';

export interface IState {
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
      title: "2 Eggs",
      url: "https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1410&q=80",
      calories: 150,
      description: "Egg yolks and whole eggs store significant amounts of protein and choline"
    },
    {
      title: "Tuna Steak (100g)",
      url: "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      calories: 130,
      description: "Healthy – Low fat, low calories, high protein, and contains essential amino acids"
    }
  ])

  return (
    <div className="container mx-auto p-10 min-h-screen max-w-5xl">
      <h1 className="text-3xl text-center font-bold pb-3">Calorie Counter</h1>
      <p className="text-center mb-8">Recording your calories as you eat gives you a clearer picture of the calories you are consuming. It also enhances your awareness of food values and nutrient levels, all of which helps you make healthier choices when eating.</p>
      
      <List food={food}/>
      <AddToList food={food} setFood={setFood}/>
    </div>
  );
}

export default App;
