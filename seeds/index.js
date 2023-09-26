const sequelize = require('../config/connection');
const seedStocks = require('./stockData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedStocks();

  process.exit(0);
};

seedAll();