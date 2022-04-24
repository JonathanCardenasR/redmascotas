'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('Vet','vetUserId',{
      type: Sequelize.INTEGER,
      allowNull:true
   })

   await queryInterface.addConstraint('Vet',{
    fields : ['vetUserId'],
    type : 'FOREIGN KEY',
    name : 'FK_VET_USER',
    references :{ 
      table : 'User',
      field : 'id'
      }
    })

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('Vet','FK_VET_USER')
    await queryInterface.removeColumn('Vet','vetUserId')

  }
};
