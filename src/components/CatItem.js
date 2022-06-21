import React from 'react';

function CatItem({ cat }) {
  return (
    <li>
      <h2>{cat.breed}</h2>
      <p>{cat.age}</p>
      <img src={cat.image} alt={cat.breed} />
    </li>
  );
}

export default CatItem;
