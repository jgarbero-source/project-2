import React, { useState } from "react";
import CatContainer from "./CatContainer";

function Search({ catData }) {
  //const [searchQuery, setSearchQuery] = useState("");
  //
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedBreed, setSelectedBreed] = useState("All");

  const ageChoices = catData
    .map((cat) => cat.age)
    .filter((val, ind, arr) => arr.indexOf(val) === ind);
  const sizeChoices = catData
    .map((cat) => cat.size)
    .filter((val, ind, arr) => arr.indexOf(val) === ind);
  const genderChoices = catData
    .map((cat) => cat.gender)
    .filter((val, ind, arr) => arr.indexOf(val) === ind);
  const breedChoices = catData
    .map((cat) => cat.breed)
    .filter((val, ind, arr) => arr.indexOf(val) === ind);

  const allFilters = {
    Age: {
      curState: selectedAge,
      setFunction: setSelectedAge,
      choices: ageChoices,
    },
    Size: {
      curState: selectedSize,
      setFunction: setSelectedSize,
      choices: sizeChoices,
    },
  };

  const handleSelection = (e) => {
    const { name, value } = e.target;
    console.log(`${name} set to ${value}`);
    switch (name) {
      case "Age":
        setSelectedAge(value);
        break;
      case "Size":
        setSelectedSize(value);
        break;
      case "Gender":
        setSelectedGender(value);
        break;
      case "Breed":
        setSelectedBreed(value);
        break;
      default:
        console.log("Unexpected filter", name);
    }
  };

  const buildSelector = (choices, choiceType, choiceValue) => {
    return (
      <>
        <label>{choiceType}</label>
        <select
          name={choiceType}
          key={choiceType}
          onChange={handleSelection}
          value={choiceValue}
        >
          <option key={`all${choiceType}`}>All</option>
          {choices.map((choice) => (
            <option key={choice} value={choice.toLowerCase()}>
              {choice}
            </option>
          ))}
        </select>
      </>
    );
  };

  const buildFilters = () => {
    return <div> {/* will build using the allFilters object*/}</div>;
  };

  const filterCats = () => {};

  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Cats" />
      {buildSelector(ageChoices.sort(), "Age", selectedAge)}
      {buildSelector(sizeChoices.sort(), "Size", selectedSize)}
      {buildSelector(genderChoices.sort(), "Gender", selectedGender)}
      {buildSelector(breedChoices.sort(), "Breed", selectedBreed)}

      <CatContainer catData={catData} />
    </div>
  );
}

export default Search;
