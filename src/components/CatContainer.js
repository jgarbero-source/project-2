import React from 'react';
import CatItem from './CatItem';

function CatContainer({ catData }) {

  //create some if conditional that selects one div over the other? I don't think that's how this works. 
  return (
    <>
      <div className='container'>
        <h2>Render Cats Here!</h2>
      </div>
      {catData.map((cat) => (
        <CatItem key={cat.id} cat={cat} />
      
      ))} 
    </>
  );
}

export default CatContainer;
