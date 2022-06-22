import React, { useState } from "react";
import OptionPicker from "./OptionPicker";

function Form({ catData, addCat }) {
  const [catImage, setCatImage] = useState("");

  const [filterChoice, setFilterChoice] = useState({
    Age: "All",
    Size: "All",
    Gender: "All",
    Breed: "All",
  });

  function handleImageChange(e) {
    setCatImage(e.target.value);
  }
  const handleSelection = (e) => {
    const { name, value } = e.target;
    setFilterChoice({ ...filterChoice, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newCat = {
      isFavorite: false,
      age: filterChoice.Age.charAt(0).toUpperCase() + filterChoice.Age.slice(1),
      gender:
        filterChoice.Gender.charAt(0).toUpperCase() +
        filterChoice.Gender.slice(1),
      size:
        filterChoice.Size.charAt(0).toUpperCase() + filterChoice.Size.slice(1),
      image: catImage,
      breed:
        filterChoice.Breed.charAt(0).toUpperCase() +
        filterChoice.Breed.slice(1),
    };
    addCat(newCat);

    fetch(`http://localhost:3000/cats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCat),
    })
      .then((r) => r.json())
      .then((oneCat) => addCat(oneCat));
  }

  return (
    <div>
      <h1>Add a kitty!</h1>
      <form onSubmit={handleSubmit}>
        <OptionPicker
          catData={catData}
          filterChoice={filterChoice}
          onSelection={handleSelection}
        />

        <input
          type="text"
          name="image"
          value={catImage}
          placeholder="Image URL"
          onChange={handleImageChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
