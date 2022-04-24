'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('Pet','ownerId',{
      type: Sequelize.INTEGER,
      allowNull:true
   })

   await queryInterface.addConstraint('Pet',{
    fields : ['ownerId'],
    type : 'FOREIGN KEY',
    name : 'FK_PET_USER',
    references :{ 
      table : 'User',
      field : 'id'
      }
    })

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('Pet','FK_PET_USER')
    await queryInterface.removeColumn('Pet','ownerId')

  }
};
