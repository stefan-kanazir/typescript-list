import React, { useState } from 'react';

const AddToList = () => {

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

    return (
        <div>
            <h2 className="text-xl text-center mt-20 pb-6">Add Items</h2>

            <form className="flex flex-col gap-6 max-w-lg mx-auto">

                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-2">Food:</label>
                    <input 
                        type="text"
                        placeholder="Food name"
                        name="title"
                        className="border p-2 border-gray-500"
                        value={input.title} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="calories" className="mb-2">Calories:</label>
                    <input 
                        type="text"
                        placeholder="Number of calories"
                        name="calories"
                        className="border p-2 border-gray-500"
                        value={input.calories} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="url" className="mb-2">Image URL:</label>
                    <input 
                        type="text"
                        placeholder="https://example-url.com"
                        name="url"
                        className="border p-2 border-gray-500"
                        value={input.url} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-2">Description:</label>
                    <textarea 
                        placeholder="Description"
                        name="description"
                        className="border p-2 border-gray-500"
                        value={input.description} 
                        onChange={handleChange}
                    />
                </div>

            </form>
        </div>
    )
}

export default AddToList
