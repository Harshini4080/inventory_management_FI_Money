import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = process.env.BACKEND_URL;

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    quantity: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${BASE_URL}/api/products`, product, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('✅ Product added!');
      setProduct({ name: '', sku: '', quantity: '', price: '', description: '' }); 
    } catch (err) {
      toast.error(err.response?.data?.message || '❌ Failed to add product');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
        <input name="sku" value={product.sku} onChange={handleChange} placeholder="SKU" required />
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" required />
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
