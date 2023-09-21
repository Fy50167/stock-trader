const { User } = require('../models');

const userdata = [
    {
      name: 'John Brown',
      email: 'johnbrown@gmail.com',
      password: 'password1', 
      balance: '1500.00'
    },
    {
      name: 'Larry Thorn',
      email: 'laryythorn@gmail.com',
      password: 'password1', 
      balance: '2500.00'
    },
    {
      name: 'Debbie Wilson',
      email: 'debbiewilson@gmail.com',
      password: 'password1', 
      balance: '5500.00'
    },
  ];
  
  const seedUsers = () => User.bulkCreate(userdata);
  
  module.exports = seedUsers;