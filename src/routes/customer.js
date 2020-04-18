const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list); 
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete); // el /:id se le conoce como parametro de la ruta

module.exports = router;