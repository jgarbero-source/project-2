import React, { useState } from "react";
import CatContainer from "./CatContainer";

function Search({ catData, handleCatUpdate, deleteCat }) {
  const [filterChoice, setFilterChoice] = useState({
    Age: "All",
    Size: "All",
    Gender: "All",
    Breed: "All",
  });
  const filterNames = Object.keys(filterChoice);

  let filterOptions = {};
  filterNames.forEach((option) => {
    filterOptions = {
      ...filterOptions,
      [option]: catData
        .map((cat) => cat[option.toLowerCase()])
        .filter((val, ind, arr) => arr.indexOf(val) === ind),
    };
  });

  const handleSelection = (e) => {
    const { name, value } = e.target;

    setFilterChoice({ ...filterChoice, [name]: value });
  };

  const buildSelector = (choiceType) => {
    return (
      <div key={choiceType}>
        <label key={choiceType + "label"}>{choiceType}</label>
        <select
          name={choiceType}
          key={choiceType}
          onChange={handleSelection}
          value={filterChoice[choiceType]}
        >
          <option key={`all${choiceType}`}>All</option>
          {filterOptions[choiceType].map((choice) => (
            <option
              key={`${choice}_${choiceType}`}
              value={choice.toLowerCase()}
            >
              {choice}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const filterCats = () => {
    // Filtering an object for just key:value pairs where value !== 'All'
    const asArray = Object.entries(filterChoice);
    const filtered = asArray.filter(([key, value]) => value !== "All");
    const activeFilters = Object.fromEntries(filtered);

    let filteredCats = [];
    let remainingFilteredCats = [...catData];

    for (let i in activeFilters) {
      filteredCats = remainingFilteredCats;
      remainingFilteredCats = filteredCats.filter(
        (cat) =>
          cat[i.toLowerCase()].toLowerCase() === filterChoice[i].toLowerCase()
      );
    }
    return remainingFilteredCats;
  };

  return (
    <div className="filter" key="search">
      {filterNames.map((option) => buildSelector(option))}

      <CatContainer catData={filterCats()} handleCatUpdate={handleCatUpdate} deleteCat={deleteCat}/>
    </div>
  );
}

export default Search;
