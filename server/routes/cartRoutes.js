const { Router } = require('express');
const router = Router();
const { addToCart, getCartItems, deleteFromCart, updateQuantity } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addToCart);
router.get('/', authMiddleware, getCartItems);
router.delete('/:itemId', authMiddleware, deleteFromCart);
router.put('/:itemId', authMiddleware, updateQuantity);

module.exports = router;