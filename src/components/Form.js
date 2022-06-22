import React, { useState } from "react";

function Form({ addCat }) {

    const [formData, setFormData] = useState({
        isFavorite: false,
        age: "",
        gender: "",
        size: "",
        image: "",
        breed: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        addCat(formData)

        fetch(`http://localhost:3000/cats`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r=>r.json())
            .then(oneCat=>addCat(oneCat))
    }




    return(
        <div>
            <h1>Add a kitty!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="age" value={formData.age} placeholder="Age" onChange={handleChange} />
                <input type="text" name="gender" value={formData.gender} placeholder="Gender" onChange={handleChange}/>
                <input type="text" name="size" value={formData.size} placeholder="Size" onChange={handleChange}/>
                <input type="text" name="image" value={formData.image} placeholder="Image URL" onChange={handleChange}/>
                <input type="text" name="breed" value={formData.breed} placeholder="Breed" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Form;