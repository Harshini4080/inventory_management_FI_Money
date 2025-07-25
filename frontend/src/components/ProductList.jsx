import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; // use central axios with token
import { toast } from 'react-toastify';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data.products);
        setLoading(false);
      } catch (err) {
        toast.error(err.response?.data?.message || 'Error loading products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="form-container">
      <h2>All Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Name</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.sku}</td>
                <td>{p.quantity}</td>
                <td>{p.price}</td>
                <td>{p.description || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
  marginTop: '10px',
};

export default ProductList;
