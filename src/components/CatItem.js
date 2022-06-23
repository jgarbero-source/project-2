import React from 'react';

function CatItem({
  isFavorite,
  age,
  gender,
  size,
  image,
  breed,
  id,
  handleCatUpdate,
  deleteCat,
}) {
  function handleFavorite() {
    isFavorite = !isFavorite;
    console.log(isFavorite);
    console.log(id);

    fetch(`http://localhost:3000/cats/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isFavorite: isFavorite }),
    })
      .then((r) => r.json())
      .then((favCat) => handleCatUpdate(favCat));
  }

  function handleDelete() {
    fetch(`http://localhost:3000/cats/${id}`, {
      method: 'DELETE',
    });

    deleteCat(id);
  }

  return (
    <div>
      <h3>{breed}</h3>
      <h4>
        {age} | {size} | {gender}
      </h4>
      <img src={image} alt={breed} width='250' height='250' />
      <button onClick={handleFavorite}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CatItem;
