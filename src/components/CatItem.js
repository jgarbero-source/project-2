import React, { useState } from 'react';

function CatItem({ cat }) {

  const { id } = cat

  function handleFavorite() {
    cat.isFavorite=!cat.isFavorite
    console.log(cat.isFavorite)
    
    fetch(`http://localhost:3000/cats/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({isFavorite: cat.isFavorite})
    })
  }

  //we need to create a button that changes isFavorite in the db.json from false to true. If it is true, we put it in the favorites array.
  //create a function that changes the data from false to true in app
  //send this function down to the item and call it inside the handle favorite function. 
  //have a patch request make it final. 

  return (
    <li>
      <h2>{cat.breed}</h2>
      <p>{cat.age}</p>
      <img src={cat.image} alt={cat.breed} />
      <button onClick={handleFavorite} >Favorite</button>
    </li>
  );
}

export default CatItem;
