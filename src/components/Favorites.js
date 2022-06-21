import React from 'react';
import CatContainer from './CatContainer';

function Favorites({ favoriteCats, handleCatUpdate }) {
  return (
    <div>
      <h1>Favorites</h1>
      <CatContainer catData={favoriteCats} handleCatUpdate={handleCatUpdate} />
    </div>
  );
}

export default Favorites;
