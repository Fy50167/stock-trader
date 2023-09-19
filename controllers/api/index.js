const router = require('express').Router();
const userRoutes = require('./userRoutes');
const stocksRoutes = require('./stockRoutes');

router.use('/users', userRoutes);
router.use('/stocks', stocksRoutes);

module.exports = router;
