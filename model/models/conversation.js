'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class conversation extends Model {
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
  conversation.init({
    estilo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'conversation',
    freezeTableName : true
  });
  return conversation;
};