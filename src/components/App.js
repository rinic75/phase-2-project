import { useState } from 'react';
import '../App.css';

import data from '../data';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import OrderPage from './OrderPage';


function App() {
  const [items, setItems] = useState(data)

  return (
    <div className="App">

      <NavBar />      
      <Switch>
        <Route exact path="/">
          <MainPage items={items}/>
        </Route>
        <Route path="/order/:id">
          <OrderPage items={items}/>
        </Route>
        <Route path="/cart">
          <div>Cart Page</div>
        </Route>
        <Route path="/about">
          <div>About Page</div>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
