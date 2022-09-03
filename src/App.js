import { useEffect, useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import { Route, Switch, useHistory } from 'react-router-dom';
import MainPage from './components/MainPage';
import EditItem from './components/EditItem';
import NewItem from './components/NewItem';
import Cart from './components/Cart';

function App() {
  const [items, setItems] = useState([])
  const [admin, setAdmin] = useState(false)
  const [search, setSearch] = useState("")
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

  const searchedItem = items.filter(item => {
    return item.title.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <div className="App">
      <NavBar admin={admin} setAdmin={setAdmin} onSearch={setSearch}/>      
      <Switch>
        <Route exact path="/">
          <MainPage items={searchedItem} admin={admin} onHandleDelete={handleDelete}/>
        </Route>
        <Route path="/cart">
          <Cart />
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
