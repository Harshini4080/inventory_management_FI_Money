import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/">Login</Link>
        {token && (
          <>
            {' | '}
            <Link to="/add">Add Product</Link>
            {' | '}
            <Link to="/list">Product List</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/add"
          element={token ? <AddProduct /> : <Navigate to="/" replace />}
        />
        <Route
          path="/list"
          element={token ? <ProductList /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

const navStyle = {
  padding: '10px',
  background: '#f0f0f0',
  marginBottom: '20px',
};

export default App;
