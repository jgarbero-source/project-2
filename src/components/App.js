import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Search from './Search';
import Favorites from './Favorites';
import Home from './Home';
import '../assets/css/App.css';

function App() {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cats')
      .then((res) => res.json())
      .then((data) => setCatData(data));
  }, []);

  const favoriteCats = catData.filter(cats => cats.isFavorite === true )
  console.log(favoriteCats)

  function handleCatUpdate(newFavCat) {
    setCatData(catData.map(cat=> cat.id === newFavCat.id ? newFavCat : cat))
  }

  return (
    <div className='app'>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/search'>
          <Search catData={catData} handleCatUpdate={handleCatUpdate} />
        </Route>
        <Route exact path='/favorites'>
          <Favorites favoriteCats={favoriteCats} handleCatUpdate={handleCatUpdate} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
