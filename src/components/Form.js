import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import OptionPicker from './OptionPicker';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Form({ catData, addCat }) {
  const defaultFormData = {
    age: '',
    size: '',
    gender: '',
    breed: '',
  };
  const history = useHistory();

  const [catImage, setCatImage] = useState('');

  const [filterChoice, setFilterChoice] = useState(defaultFormData);

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
      age: filterChoice.age,
      gender: filterChoice.gender,
      size: filterChoice.size,
      image: catImage,
      breed: filterChoice.breed,
    };
    addCat(newCat);

    fetch(`${process.env.REACT_APP_API_URL}/cats`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCat),
    })
      .then((r) => r.json())
      .then((oneCat) => addCat(oneCat));

    setFilterChoice(defaultFormData);
    setCatImage('');

    history.push('/search/#bottom');
  }
  const allDataEntered =
    catImage &&
    filterChoice.age &&
    filterChoice.breed &&
    filterChoice.size &&
    filterChoice.gender;

  return (
    <Container maxWidth='lg' sx={{ paddingTop: '5px' }}>
      <Typography variant='h4' gutterBottom component='div'>
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
            type='text'
            name='image'
            value={catImage}
            placeholder='Image URL'
            label='Image URL'
            variant='standard'
            onChange={handleImageChange}
            sx={{
              paddingBottom: '5px',
              marginLeft: '10px',
              paddingRight: '10px',
              width: '85%',
            }}
          />
          <Card>
            {catImage ? (
              <CardMedia
                component='img'
                src={catImage}
                alt={filterChoice.breed}
                height='500px'
              />
            ) : null}
            {filterChoice.age ? (
              <CardContent>
                <Typography variant='subtitle1' gutterBottom component='div'>
                  {filterChoice.breed}
                </Typography>
                <Typography variant='subtitle2' gutterBottom component='div'>
                  {filterChoice.age}
                </Typography>
                <Typography variant='subtitle2' gutterBottom component='div'>
                  {filterChoice.size}
                </Typography>
                <Typography variant='subtitle2' gutterBottom component='div'>
                  {filterChoice.gender}
                </Typography>
              </CardContent>
            ) : null}
          </Card>
          <Button disabled={!allDataEntered} type='submit'>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Form;
