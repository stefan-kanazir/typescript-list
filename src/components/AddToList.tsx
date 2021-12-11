import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    setFood: React.Dispatch<React.SetStateAction<Props["food"]>>
    food: Props["food"]
}

const AddToList: React.FC<IProps> = ({setFood, food}) => {

    const [input, setInput] = useState({
        title: "",
        url: "",
        calories: "",
        description: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.title || !input.url ||  !input.calories) return

        setFood([
            ...food,
            {
                title: input.title,
                calories: parseInt(input.calories),
                url: input.url,
                description: input.description
            }
        ]);

        setInput({
            title: "",
            calories: "",
            url: "",
            description: ""
        })
    }

    return (
        <section className="mt-10">
            <h2 className="text-xl text-center pb-6">Add Items</h2>

            <form className="flex flex-col gap-3 max-w-lg mx-auto">

                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-2">*Food:</label>
                    <input 
                        type="text"
                        placeholder="Food name"
                        name="title"
                        className="border p-2 border-gray-500 rounded"
                        value={input.title} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="calories" className="mb-2">*Calories:</label>
                    <input 
                        type="number"
                        placeholder="Number of calories"
                        name="calories"
                        className="border p-2 border-gray-500 rounded"
                        value={input.calories} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="url" className="mb-2">*Image URL:</label>
                    <input 
                        type="text"
                        placeholder="https://example-url.com"
                        name="url"
                        className="border p-2 border-gray-500 rounded"
                        value={input.url} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-2">Description (optional):</label>
                    <textarea 
                        placeholder="Description"
                        name="description"
                        className="border p-2 border-gray-500 rounded"
                        value={input.description} 
                        onChange={handleChange}
                    />
                </div>

                <button
                    onClick={handleClick}
                    className="bg-blue-900 py-3 font-bold text-sm text-white hover:bg-blue-800 rounded mt-6"
                >
                    Add to List
                </button>

            </form>
        </section>
    )
}

export default AddToList
