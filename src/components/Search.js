import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import CatContainer from "./CatContainer";
import OptionPicker from "./OptionPicker";

function Search({ catData, handleCatUpdate, deleteCat }) {
  const [filterChoice, setFilterChoice] = useState({
    Age: "All",
    Size: "All",
    Gender: "All",
    Breed: "All",
  });

  const handleSelection = (e: SelectChangeEvent) => {
    const { name, value } = e.target;

    setFilterChoice({ ...filterChoice, [name]: value });
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
    <Stack spacing={2}>
      <OptionPicker
        catData={catData}
        filterChoice={filterChoice}
        onSelection={handleSelection}
      />
      <CatContainer
        catData={filterCats()}
        handleCatUpdate={handleCatUpdate}
        deleteCat={deleteCat}
      />
    </Stack>
  );
}

export default Search;
