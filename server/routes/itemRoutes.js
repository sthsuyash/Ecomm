const { Router } = require('express');
const router = Router();
const { getItems, getItemById } = require('../controllers/itemController');

router.get('/', getItems);
router.get('/:id', getItemById);

module.exports = router;