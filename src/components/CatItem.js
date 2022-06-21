import React from 'react';

function CatItem({ isFavorite, age, gender, size, image, breed }) {
  return (
    <div>
      <h3>{breed}</h3>
      <h4>{age}</h4>
      <img src={image} alt={breed} width='250' height='250' />
    </div>
  );
}

export default CatItem;
