import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Items from './pages/Items';
import Item from './pages/Item';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Searchpage from './pages/Searchpage';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home items={items} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/items' element={<Items />} />
        <Route path='/items/search' element={<Searchpage />} />
        <Route path='/items/:id' element={<Item />} />
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path='/cart'
          element={localStorage.getItem('token') ? <Cart /> : <Navigate to='/login' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
