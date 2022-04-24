'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('Service','vetId',{
      type: Sequelize.INTEGER,
      allowNull:true
   })

   await queryInterface.addConstraint('Service',{
    fields : ['vetId'],
    type : 'FOREIGN KEY',
    name : 'FK_VET_SERVICE',
    references :{ 
      table : 'Vet',
      field : 'id'
      }
    })

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('Service','FK_VET_SERVICE')
    await queryInterface.removeColumn('Service','vetId')

  }
};
