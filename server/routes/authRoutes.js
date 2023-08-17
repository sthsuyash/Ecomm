const { Router } = require('express');
const router = Router();
const { register, login, getUserById } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getUserById);

module.exports = router;