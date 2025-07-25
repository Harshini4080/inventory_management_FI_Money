import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Login</Link> | <Link to="/add">Add Product</Link> | <Link to="/list">Product List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/list" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
