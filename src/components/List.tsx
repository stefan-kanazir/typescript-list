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
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={food.url} alt={food.title} />
            <h2>{food.title}</h2>
          </div>
          <p>{food.calories} cal</p>
          <p className="List-note">{food.description}</p>
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
