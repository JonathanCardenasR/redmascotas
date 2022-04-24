'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo(models.User,{
        foreignKey: {name: 'userMain'}
      })

      this.belongsTo(models.User,{
        foreignKey: {name: 'userSub'}
      })

    }
  }
  Friend.init({
    userMain: DataTypes.INTEGER,
    userSub: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Friend',
    freezeTableName : true
  });
  return Friend;
};