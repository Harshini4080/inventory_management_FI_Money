import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({ name: '', sku: '', quantity: '', price: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/products', product, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Product added!');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add product');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} />
        <input placeholder="SKU" onChange={(e) => setProduct({ ...product, sku: e.target.value })} />
        <input type="number" placeholder="Quantity" onChange={(e) => setProduct({ ...product, quantity: e.target.value })} />
        <input type="number" placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        <textarea placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })}></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
