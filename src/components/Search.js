import React, { useState } from 'react';
import CatContainer from './CatContainer';

function Search({ catData, handleCatUpdate }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='filter'>
      <input id='search-bar' type='text' placeholder='Search Cats' />
      <CatContainer catData={catData} handleCatUpdate={handleCatUpdate} />
    </div>
  );
}

export default Search;
