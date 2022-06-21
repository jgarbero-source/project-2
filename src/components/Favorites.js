import React from 'react';
import CatContainer from './CatContainer';

function Favorites({ favoriteCats }) {
  return (
    <div>
      <h1>Favorites</h1>
      <CatContainer catData={favoriteCats} />
    </div>
  );
}

export default Favorites;
