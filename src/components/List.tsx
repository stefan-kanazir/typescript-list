import React from 'react';

interface IProps {
  food: {
    title: string
    url: string
    calories: number
    description?: string
  }[]
}

const List: React.FC<IProps> = ({food}) => {

  const renderList = (): JSX.Element[] => {
    return food.map(food => {
      return (
        <li className="grid md:grid-cols-3 border-2 border-black p-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-32 rounded-full overflow-hidden">
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
    <ul>
      {renderList()}
    </ul>
  )
}

export default List;
