import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import OptionPicker from "./OptionPicker";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function Form({ catData, addCat }) {
  const [catImage, setCatImage] = useState('');

  const [filterChoice, setFilterChoice] = useState({
    age: "",
    size: "",
    gender: "",
    breed: "",
  });

  function handleImageChange(e) {
    setCatImage(e.target.value);
  }
  const handleSelection = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFilterChoice({ ...filterChoice, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newCat = {
      isFavorite: false,
      age: filterChoice.age.charAt(0).toUpperCase() + filterChoice.age.slice(1),
      gender:
        filterChoice.gender.charAt(0).toUpperCase() +
        filterChoice.gender.slice(1),
      size:
        filterChoice.size.charAt(0).toUpperCase() + filterChoice.size.slice(1),
      image: catImage,
      breed:
        filterChoice.breed.charAt(0).toUpperCase() +
        filterChoice.breed.slice(1),
    };
    addCat(newCat);

    fetch(`http://localhost:3000/cats`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCat),
    })
      .then((r) => r.json())
      .then((oneCat) => addCat(oneCat));
  }

  return (
    <Container className='catform' maxWidth="lg">
      <Typography variant="h4" gutterBottom component="div">
        Add a kitty!
      </Typography>

      <Paper elevation={3}>
        <form onSubmit={handleSubmit}>
          <OptionPicker
            catData={catData}
            filterChoice={filterChoice}
            onSelection={handleSelection}
          />

          <TextField
            type="text"
            name="image"
            value={catImage}
            placeholder="Image URL"
            label="Image URL"
            fullWidth
            variant="standard"
            onChange={handleImageChange}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Form;
