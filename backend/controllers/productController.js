const Product = require('../models/product');

// Add a new product
const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ product_id: product._id, message: 'Product added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding product', error: err.message });
  }
};

// Update product quantity
const updateQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error updating quantity', error: err.message });
  }
};

// Get all products (with pagination)
const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};

module.exports = {
  addProduct,
  updateQuantity,
  getProducts,
};
