import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({food}) => {

  const renderList = (): JSX.Element[] => {
    return food.map(food => {
      return (
        <li className="grid lg:grid-cols-3 border-2 border-black p-4 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-32 rounded-full overflow-hidden grow">
              <img className="object-cover h-32 w-full" src={food.url} alt={food.title} />
            </div>
            <h2 className="md:ml-4 font-bold text-xl">{food.title}</h2>
          </div>
          <p className="flex items-center justify-center py-4 text-lg">{food.calories} cal</p>
          <p className="flex items-center justify-center text-center md:text-left">{food.description}</p>
        </li>
      )
    })
  }

  return (
    <ul className="flex flex-col gap-y-4">
      {renderList()}
    </ul>
  )
}

export default List;
