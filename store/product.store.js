const Product = require('../model/product.model');

// Add a new product
const addProduct = async (productData) => {
  return await Product.create(productData);
};

// Get all products
const getAllProducts = async () => {
  return await Product.find();
};

// Get a product by ID
const getProductById = async (id) => {
  return await Product.findById(id);
};

// Update a product by ID
const updateProduct = async (id, updateData) => {
  return await Product.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a product by ID
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

const saveProduct = async (product) => {
  const result = await product.save();
  return result;
};

module.exports = { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct, saveProduct};
