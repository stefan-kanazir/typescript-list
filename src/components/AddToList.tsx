import React, { useState } from 'react';

const AddToList = () => {

    const [input, setInput] = useState({
        title: "",
        url: "",
        calories: "",
        description: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2 className="text-xl text-center py-6">Add Items</h2>

            <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="food">Food Name:</label>
                    <input 
                        type="text"
                        placeholder="food"
                        name="food"
                        className="border p-1"
                        value={input.title} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="calories">Calories:</label>
                    <input 
                        type="text"
                        placeholder="calories"
                        name="calories"
                        className="border p-1"
                        value={input.calories} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="img">Image URL:</label>
                    <input 
                        type="text"
                        placeholder="img"
                        name="img"
                        className="border p-1"
                        value={input.url} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description">Description:</label>
                    <input 
                        type="text"
                        placeholder="description"
                        name="description"
                        className="border p-1"
                        value={input.description} 
                    />
                </div>

            </form>
        </div>
    )
}

export default AddToList
