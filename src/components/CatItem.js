import React, { useState } from 'react';


function CatItem({ isFavorite, age, gender, size, image, breed }) {
        
    function handleFavorite() {
      isFavorite=!isFavorite
      console.log(cat.isFavorite)
    
      fetch(`http://localhost:3000/cats/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({isFavorite: cat.isFavorite})
      })
    }
  return (
    <div>
      <h3>{breed}</h3>
      <h4>{age}</h4>
      <img src={image} alt={breed} width='250' height='250' />
      <button onClick={handleFavorite}>Favorite</button>
    </div>

  );
}

export default CatItem;
