'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo(models.User,{
        foreignKey: {name: 'userId'}
      })

      this.belongsTo(models.Conversation,{
        foreignKey: {name: 'converId'}
      })

    }
  }
  Message.init({
    userId: DataTypes.INTEGER,
    converId: DataTypes.INTEGER,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Message',
    freezeTableName : true
  });
  return Message;
};