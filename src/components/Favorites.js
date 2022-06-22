import React from 'react';
import CatContainer from './CatContainer';

function Favorites({ favoriteCats, handleCatUpdate, deleteCat }) {
  return (
    <div>
      <h1>Favorites</h1>
      <CatContainer catData={favoriteCats} handleCatUpdate={handleCatUpdate} deleteCat={deleteCat} />
    </div>
  );
}

export default Favorites;
