import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Search from './Search';
import Favorites from './Favorites';
import Home from './Home';
import Form from './Form';
import '../assets/css/App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cats')
      .then((res) => res.json())
      .then((data) => setCatData(data));
  }, []);

  const favoriteCats = catData.filter((cats) => cats.isFavorite === true);
  console.log(favoriteCats);

  function handleCatUpdate(newFavCat) {
    setCatData(
      catData.map((cat) => (cat.id === newFavCat.id ? newFavCat : cat))
    );
  }

  function addCat(newCat) {
    setCatData([...catData, newCat]);
  }

  function deleteCat(catId) {
    const updatedCats = catData.filter((cat) => cat.id !== catId);
    setCatData(updatedCats);
  }

  return (
    <div className='app'>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/search'>
          <Search
            catData={catData}
            handleCatUpdate={handleCatUpdate}
            deleteCat={deleteCat}
          />
        </Route>
        <Route exact path='/favorites'>
          <Favorites
            favoriteCats={favoriteCats}
            handleCatUpdate={handleCatUpdate}
            deleteCat={deleteCat}
          />
        </Route>
        <Route exact path='/form'>
          <Form catData={catData} addCat={addCat} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
