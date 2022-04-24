'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('Group','creatorId',{
      type: Sequelize.INTEGER,
      allowNull:true
   })

   await queryInterface.addConstraint('Group',{
    fields : ['creatorId'],
    type : 'FOREIGN KEY',
    name : 'FK_GROUP_USER',
    references :{ 
      table : 'User',
      field : 'id'
      }
    })

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('Group','FK_GROUP_USER')
    await queryInterface.removeColumn('Group','creatorId')

  }
};
