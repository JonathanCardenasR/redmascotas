'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

   await queryInterface.bulkInsert('User', [
      {nombre: 'nombre1',apellido: 'apellido1',usuario:'user1',password:'pass1',isvet:0,email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre2',apellido: 'apellido2',usuario:'user1',password:'pass1',isvet:0,email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre3',apellido: 'apellido3',usuario:'user1',password:'pass1',isvet:0,email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre4',apellido: 'apellido4',usuario:'user1',password:'pass1',isvet:0,email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre5',apellido: 'apellido5',usuario:'user1',password:'pass1',isvet:0,email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre6',apellido: 'apellido6',usuario:'user1',password:'pass1',isvet:0,email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre7',apellido: 'apellido7',usuario:'user1',password:'pass1',isvet:0,email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'veterinaria1',apellido: 'Lema1',usuario:'user1',password:'pass1',isvet:0,email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
   ]);

   
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Area', null, {});
    await queryInterface.bulkDelete('Grupo', null, {})
    await queryInterface.bulkDelete('Rol', null, {})
  }
};
