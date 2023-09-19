const router = require('express').Router();
const stocksRoutes = require('./stockRoutes');

router.use('/stocks', stocksRoutes);

module.exports = router;