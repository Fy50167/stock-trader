const sequelize = require('../config/connection');
const seedStocks = require('./stockData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedStocks();
  await seedUsers();

  process.exit(0);
};

seedAll();