const { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct, saveProduct } = require('../store/product.store');

// Business logic to add a product
const createProduct = async (productData) => {
  return await addProduct(productData);
};

// Business logic to fetch all products
const fetchAllProducts = async () => {
  return await getAllProducts();
};

// Business logic to fetch a product by ID
const fetchProductById = async (id) => {
  const product = await getProductById(id);
  if (!product) throw new Error('Product not found');
  return product;
};

// Business logic to update a product
const modifyProduct = async (id, updateData) => {
  const updatedProduct = await updateProduct(id, updateData);
  if (!updatedProduct) throw new Error('Product not found');
  return updatedProduct;
};

// Business logic to delete a product
const removeProduct = async (id) => {
  const deletedProduct = await deleteProduct(id);
  if (!deletedProduct) throw new Error('Product not found');
  return deletedProduct;
};

const checkProducts = async (productRequests) => {
  const availability = await productRequests.map((request) => {
    const product = getProductById(request.productId);
    if (!product || product.quantity < request.quantity) {
      return { productId: request.productId, available: false };
    }
    return { productId: request.productId, available: true };
  });

  const allAvailable = availability.every(p => p.available);
  return { success: allAvailable, details: availability };
};

const updateProductStock = async (productId, quantity) => {
  const product = await getProductById(productId);

  if (!product) {
    const error = new Error('Product not found');
    error.status = 404;
    throw error;
  }

  if (product.stock < quantity) {
    const error = new Error('Not enough stock');
    error.status = 400;
    throw error;
  }

  product.stock -= quantity;

  // Save the updated product in the store
  return await saveProduct(product);
};


module.exports = { createProduct, fetchAllProducts, fetchProductById, modifyProduct, removeProduct, checkProducts, updateProduct , updateProductStock};
