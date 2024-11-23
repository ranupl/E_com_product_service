const express = require('express');
const {
  addProduct,
  deleteProduct,
  updateProduct,
  getAllProduct,
  getProductById
} = require('../controller/product.controller');

const router = express.Router();

router.post('/addProduct', addProduct); 
router.get('/getAllProduct', getAllProduct); 
router.get('/getProduct/:id', getProductById); 
router.put('/updateProduct/:id', updateProduct); 
router.delete('/deleteProduct/:id', deleteProduct); 


module.exports = router;
