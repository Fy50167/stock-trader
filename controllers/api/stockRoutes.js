const router = require('express').Router();
const { Stock } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newStock = await Stock.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newStock);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/:id', withAuth, async (req, res) => {
    try {
      const stockData = await Stock.findByPk(req.params.id);
      console.log(stockData);

      const newStock = await Stock.create({
        company: stockData.dataValues.company,
        symbol: stockData.dataValues.symbol,
        price: stockData.dataValues.price,
        quantity: 1,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newStock);
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.put('/:id', withAuth, async (req, res) => {
    // update a stock by its `id` value
    try{
      const stockData = await Stock.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({message: "Stock quantity updated!"});
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const stockData = await Stock.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!stockData) {
        res.status(404).json({ message: 'Stock purchase not found!' });
        return;
      }
  
      res.status(200).json(stockData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  