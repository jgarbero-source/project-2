import React from 'react';
import CatContainer from './CatContainer';

function Favorites({ catData }) {
  return (
    <div>
      <h1>Favorites</h1>
      <CatContainer catData={catData} />
    </div>
  );
}

export default Favorites;
