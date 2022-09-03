import { useEffect, useState } from 'react';
import '../App.css';

import NavBar from './NavBar';
import { Route, Switch, useHistory } from 'react-router-dom';
import MainPage from './MainPage';
import OrderPage from './OrderPage';
import EditItem from './EditItem';
import NewItem from './NewItem';

function App() {
  const [items, setItems] = useState([])
  const [admin, setAdmin] = useState(false)
  const history = useHistory()

  useEffect(()=> {
    fetch('http://localhost:3000/data')
    .then(r=>r.json())
    .then(data => setItems(data))
  },[])

  function handleUpdate(updatedItem) {
    const updatedItems = items.map(item => {
      if(item.id === updatedItem.id) {
        return updatedItem
      } else {
        return item
      }
    })
    setItems(updatedItems)
    history.push('/')
  }
  function handleDelete (id) {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }
  function handleNewItem(newItem) {
    setItems([...items, newItem])
    history.push('/')
  }

  return (
    <div className="App">
      <NavBar admin={admin} setAdmin={setAdmin} />      
      <Switch>
        <Route exact path="/">
          <MainPage items={items} admin={admin} onHandleDelete={handleDelete}/>
        </Route>
        <Route path="/order/:id">
          <OrderPage items={items}/>
        </Route>
        <Route path="/cart">
          <div>Cart Page</div>
        </Route>
        <Route path="/edit/:id">
          <EditItem items={items} onHandleUpdate={handleUpdate}/>
        </Route>
        <Route path="/new">
          <NewItem onAddItem={handleNewItem} />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
