const User = require('./User');
const Stock = require('./Stock');


// Every stock only belongs to one user
Stock.belongsTo(User, {
    foreignKey: 'user_id',
});
  
// A user can have multiple stocks
User.hasMany(Stock, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Stock,
    User,
  };