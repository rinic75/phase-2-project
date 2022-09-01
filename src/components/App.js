import { useEffect, useState } from 'react';
import '../App.css';

import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import OrderPage from './OrderPage';
import AddNew from './AddNew';

function App() {
  const [items, setItems] = useState([])
  const [admin, setAdmin] = useState(false)

  useEffect(()=> {
    fetch('http://localhost:3000/data')
    .then(r=>r.json())
    .then(data => setItems(data))
  },[])

  return (
    <div className="App">

      <NavBar admin={admin} setAdmin={setAdmin} />      
      <Switch>
        <Route exact path="/">
          <MainPage items={items} admin={admin}/>
        </Route>
        <Route path="/order/:id">
          <OrderPage items={items}/>
        </Route>
        <Route path="/cart">
          <div>Cart Page</div>
        </Route>
        <Route path="/new/:id">
          <AddNew items={items}/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
