const router = require('express').Router();
const stocksRoutes = require('./stockRoutes');
const userRoutes = require('./userRoutes');

router.use('/stocks', stocksRoutes);
router.use('/users', userRoutes);

module.exports = router;