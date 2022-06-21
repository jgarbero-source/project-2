import React, { useState, useEffect } from "react";
import CatContainer from "./CatContainer";

function Search({ catData, handleCatUpdate }) {
  const FILTER_OPTIONS = ["Age", "Size", "Gender", "Breed"];

  // REPLACE THIS ///////////////////////////////
  // const [selectedAge, setSelectedAge] = useState("All");
  // const [selectedSize, setSelectedSize] = useState("All");
  // const [selectedGender, setSelectedGender] = useState("All");
  // const [selectedBreed, setSelectedBreed] = useState("All");
  ////////////////////////////////////////////

  const [filterChoice, setFilterChoice] = useState({
    Age: "All",
    Size: "All",
    Gender: "All",
    Breed: "All",
  });

  console.log("filterChoice is");
  console.log(filterChoice);

  //  REPLACE THIS  ///////////////////////
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
  /////////////////////////////////
  // Can create this more dynamically
  const filterOptions = {
    Age: catData
      .map((cat) => cat.age)
      .filter((val, ind, arr) => arr.indexOf(val) === ind),
    Size: catData
      .map((cat) => cat.size)
      .filter((val, ind, arr) => arr.indexOf(val) === ind),
    Gender: catData
      .map((cat) => cat.gender)
      .filter((val, ind, arr) => arr.indexOf(val) === ind),
    Breed: catData
      .map((cat) => cat.breed)
      .filter((val, ind, arr) => arr.indexOf(val) === ind),
  };
  console.log("filterOptions[Age] is", filterOptions["Age"]);

  // const allFilters = {
  //   Age: {
  //     curState: selectedAge,
  //     setFunction: setSelectedAge,
  //     choices: ageChoices,
  //   },
  //   Size: {
  //     curState: selectedSize,
  //     setFunction: setSelectedSize,
  //     choices: sizeChoices,
  //   },
  // };

  // REPLACE THIS BELOW ////
  // const handleSelection = (e) => {
  //   const { name, value } = e.target;
  //   console.log(`${name} set to ${value}`);
  //   switch (name) {
  //     case "Age":
  //       setSelectedAge(value);
  //       break;
  //     case "Size":
  //       setSelectedSize(value);
  //       break;
  //     case "Gender":
  //       setSelectedGender(value);
  //       break;
  //     case "Breed":
  //       setSelectedBreed(value);
  //       break;
  //     default:
  //       console.log("Unexpected filter", name);
  //   }
  // };
  const handleSelection = (e) => {
    const { name, value } = e.target;
    console.log(`${name} set to ${value}`);
    setFilterChoice({ ...filterChoice, [name]: value });
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

  const filterCats = () => {
    //////////////////////////////////////////////////////
    // Query filterChoice for values not equal to "All".  Only have to filter on those
    const filteredCats = catData.filter(
      (cat) =>
        (filterChoice.Age === "All"
          ? true
          : cat.age.toLowerCase().includes(filterChoice.Age.toLowerCase())) &&
        (filterChoice.Size === "All"
          ? true
          : cat.size.toLowerCase().includes(filterChoice.Size.toLowerCase())) &&
        (filterChoice.Gender === "All"
          ? true
          : cat.gender
              .toLowerCase()
              .includes(filterChoice.Gender.toLowerCase())) &&
        (filterChoice.Breed === "All"
          ? true
          : cat.breed.toLowerCase().includes(filterChoice.Breed.toLowerCase()))
    );
    console.log(filteredCats);
    console.log(catData);
    return filteredCats;
  };
  // {FILTER_OPTIONS.forEach((option) =>
  //   buildSelector(
  //     filterOptions[{ option }],
  //     { option },
  //     filterChoice[{ option }]
  //   )
  // )}
  FILTER_OPTIONS.forEach((option) => console.log(option));
  const testString = "Age";
  return (
    <div className="filter">
      {/*<input id="search-bar" type="text" placeholder="Search Cats" />*/}
      {buildSelector(
        filterOptions[testString],
        testString,
        filterChoice[testString]
      )}
      {buildSelector(filterOptions["Size"], "Size", filterChoice["Size"])}
      {buildSelector(filterOptions["Gender"], "Gender", filterChoice["Gender"])}
      {buildSelector(filterOptions["Breed"], "Breed", filterChoice["Breed"])}

      <CatContainer catData={filterCats()} handleCatUpdate={handleCatUpdate} />
    </div>
  );
}

export default Search;
