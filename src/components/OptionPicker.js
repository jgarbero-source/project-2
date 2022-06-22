import React from "react";

function OptionPicker({ catData, filterChoice, onSelection }) {
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

  const buildSelector = (choiceType) => {
    return (
      <div key={choiceType}>
        <label key={choiceType + "label"}>{choiceType}</label>
        <select
          name={choiceType}
          key={choiceType}
          onChange={onSelection}
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

  return (
    <div className="filter" key="options">
      {filterNames.map((option) => buildSelector(option))}
    </div>
  );
}
export default OptionPicker;
