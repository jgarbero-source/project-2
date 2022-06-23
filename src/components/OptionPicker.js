import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel key={choiceType + 'label'} id={choiceType + 'label'}>
          {choiceType}
        </InputLabel>
        <Select
          labelId={choiceType + 'label'}
          id={choiceType + 'select'}
          label={choiceType}
          name={choiceType}
          key={choiceType}
          onChange={onSelection}
          value={filterChoice[choiceType]}
        >
          <MenuItem key={`All_${choiceType}`} value=''>
            <em>none</em>
          </MenuItem>
          {filterOptions[choiceType].map((choice) => (
            <MenuItem key={`${choice}_${choiceType}`} value={choice}>
              {choice}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return <div>{filterNames.map((option) => buildSelector(option))}</div>;
}
export default OptionPicker;
