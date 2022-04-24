'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      //tabla intermedia de message
      this.hasMany(models.Message, {
        foreignKey : 'converId'
      })

    }
  }
  Conversation.init({
    estilo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Conversation',
    freezeTableName : true
  });
  return Conversation;
};