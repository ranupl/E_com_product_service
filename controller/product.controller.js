const { createProduct, fetchAllProducts, fetchProductById, modifyProduct, removeProduct, checkProducts, updateProductStock} = require('../service/product.service');

// Add Product API
const addProduct = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Products API
const getProducts = async (req, res) => {
  try {
    const products = await fetchAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Product by ID API
const getProduct = async (req, res) => {
  try {
    const product = await fetchProductById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update Product API
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await modifyProduct(req.params.id, req.body);
    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Delete Product API
const deleteProduct = async (req, res) => {
  try {
    await removeProduct(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const checkProductAvailability = async (req, res) => {
  const { products } = req.body;

  try {
    const result = await checkProducts(products);
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

const updateStock = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const result = await updateProductStock(productId, quantity);
    return res.status(200).json({ 
      success: true, 
      message: 'Stock updated successfully', 
      data: result 
  });  
    
  } catch (error) {
    res.status(error.status || 500).send({ success: false, message: error.message });
  }
};

module.exports = { addProduct, getProducts, getProduct, updateProduct, deleteProduct, checkProductAvailability, updateStock};
