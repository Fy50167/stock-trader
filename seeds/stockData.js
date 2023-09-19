const { Stock } = require('../models');

const stockdata = [
  {
    company: 'Ford Motor Company',
    symbol: 'F',
    price: '12.34'
  },
  {
    company: 'Advanced Micro Devices, Inc.',
    symbol: 'AMD',
    price: '102.37'
  },
  {
    company: 'NVIDIA Corporation',
    symbol: 'NVDA',
    price: '439.66'
  },
  {
    company: 'Apple Inc.',
    symbol: 'AAPL',
    price: '177.97'
  },
  {
    company: 'Tesla, Inc.', 
    symbol: 'TSLA', 
    price: '265.28'
  },
  {
    company: 'Southwestern Energy Company', 
    symbol: 'SWN', 
    price: '6.34'
  },
  {
    company: 'Palantir Technologies', 
    symbol: 'PLTR', 
    price: '15.46'
  },
  {
    company: 'Amazon.com, Inc.', 
    symbol: 'AMZN', 
    price: '139.98'
  },
  {
    company: 'Unity Software Inc.', 
    symbol: 'U', 
    price: '33.45'
  },
  {
    company: 'Vale S.A.', 
    symbol: 'VALE', 
    price: '14.11'
  },
  {
    company: 'Lucid Group, Inc.', 
    symbol: 'LCID', 
    price: '5.64'
  },
  {
    company: 'AT&T Inc.', 
    symbol: 'T', 
    price: '15.09'
  },
  {
    company: 'Intel Corporation', 
    symbol: 'INTC', 
    price: '37.99'
  },
  {
    company: 'Pfizer Inc.', 
    symbol: 'PFE', 
    price: '33.64'
  },
  {
    company: 'Riot Platforms, Inc.', 
    symbol: 'RIOT', 
    price: '10.93'
  },
  {
    company: 'SoFi Technologies, Inc.', 
    symbol: 'SOFI', 
    price: '8.67'
  },
  {
    company: 'Bank of America Corporation', 
    symbol: 'BAC', 
    price: '28.67'
  },
  {
    company: 'American Airlines Group Inc.', 
    symbol: 'AAL', 
    price: '13.11'
  },

];

const seedStocks = () => Stock.bulkCreate(stockdata);

module.exports = seedStocks;