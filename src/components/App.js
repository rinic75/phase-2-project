import { useEffect, useState } from 'react';
import '../App.css';

import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import OrderPage from './OrderPage';

function App() {
  const [items, setItems] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/data')
    .then(r=>r.json())
    .then(data => setItems(data))
  },[])

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
