import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
// import NoteContainer from './CatContainer';
import NavBar from './NavBar';
import Search from './Search';
import Favorites from './Favorites';
import Home from './Home';

function App() {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cats')
      .then((res) => res.json())
      .then((data) => setCatData(data));
  }, []);

  return (
    <div className='app'>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/search'>
          <Search catData={catData} />
        </Route>
        <Route exact path='/favorites'>
          <Favorites catData={catData} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
