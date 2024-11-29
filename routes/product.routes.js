const express = require('express');
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct, checkProductAvailability, updateStock} = require('../controller/product.controller');

const router = express.Router();

router.post('/addProduct', addProduct);
router.get('/getProducts', getProducts);
router.get('/getProduct/:id', getProduct);
router.put('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.post('/products/check', checkProductAvailability);
router.post('/products/updateStock', updateStock);


module.exports = router;
