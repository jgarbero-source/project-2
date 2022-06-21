import React from 'react';
import CatItem from './CatItem';

function CatContainer({ catData, handleCatUpdate }) {

  //create some if conditional that selects one div over the other? I don't think that's how this works. 
  return (
    <div className='container'>
      {catData.map((cat) => (
        <CatItem
          key={cat.id}
          id={cat.id}
          isFavorite={cat.isFavorite}
          age={cat.age}
          gender={cat.gender}
          size={cat.size}
          image={cat.image}
          breed={cat.breed}
          handleCatUpdate={handleCatUpdate}
        />
      ))}
    </div>
  );
}

export default CatContainer;
