import React, { useState } from "react";

function CatItem({
  isFavorite,
  age,
  gender,
  size,
  image,
  breed,
  id,
  handleCatUpdate,
}) {
  function handleFavorite() {
    isFavorite = !isFavorite;
    console.log(isFavorite);
    console.log(id);

    fetch(`http://localhost:3000/cats/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: isFavorite }),
    })
      .then((r) => r.json())
      .then((favCat) => handleCatUpdate(favCat));
  }
  return (
    <div>
      <h3>{breed}</h3>
      <h4>{age}</h4>
      <h4>{gender}</h4>
      <h4>{size}</h4>
      <img src={image} alt={breed} width="250" height="250" />
      <button onClick={handleFavorite}>Favorite</button>
    </div>
  );
}

export default CatItem;
