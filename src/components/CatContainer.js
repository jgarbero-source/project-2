import React from 'react';
import CatItem from './CatItem';

function CatContainer({ catData }) {
  return (
    <div className='container'>
      {catData.map((cat) => (
        <CatItem
          key={cat.id}
          isFavorite={cat.isFavorite}
          age={cat.age}
          gender={cat.gender}
          size={cat.size}
          image={cat.image}
          breed={cat.breed}
        />
      ))}
    </div>
  );
}

export default CatContainer;
