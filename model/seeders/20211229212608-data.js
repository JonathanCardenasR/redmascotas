'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

   await queryInterface.bulkInsert('User', [
      {nombre: 'nombre1',apellido: 'apellido1',usuario:'user1',password:'pass1',email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre2',apellido: 'apellido2',usuario:'user1',password:'pass1',email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre3',apellido: 'apellido3',usuario:'user1',password:'pass1',email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre4',apellido: 'apellido4',usuario:'user1',password:'pass1',email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre5',apellido: 'apellido5',usuario:'user1',password:'pass1',email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre6',apellido: 'apellido6',usuario:'user1',password:'pass1',email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'nombre7',apellido: 'apellido7',usuario:'user1',password:'pass1',email:'email1@xxx.com',  createdAt: new Date(), updatedAt: new Date()},
   ]);

   await queryInterface.bulkInsert('Pet', [
    {nombre: 'pet1',raza: 'raza1',ownerId:1,createdAt: new Date(), updatedAt: new Date()},
    {nombre: 'pet2',raza: 'raza2',ownerId:1,createdAt: new Date(), updatedAt: new Date()},
    {nombre: 'pet3',raza: 'raza1',ownerId:3,createdAt: new Date(), updatedAt: new Date()},
    {nombre: 'pet4',raza: 'raza2',ownerId:4,createdAt: new Date(), updatedAt: new Date()},

 ]);

 await queryInterface.bulkInsert('Vet', [
  {nombre: 'vet1',vetUserId:2,createdAt: new Date(), updatedAt: new Date()},
  {nombre: 'vet2',vetUserId:5,createdAt: new Date(), updatedAt: new Date()},
]);

await queryInterface.bulkInsert('Service', [
  {nombre: 'servicio1', vetId: 1,createdAt: new Date(), updatedAt: new Date()},
  {nombre: 'servicio2', vetId: 1,createdAt: new Date(), updatedAt: new Date()},
  {nombre: 'servicio3', vetId: 1,createdAt: new Date(), updatedAt: new Date()},
  {nombre: 'servicio4', vetId: 2,createdAt: new Date(), updatedAt: new Date()},
  {nombre: 'servicio5', vetId: 2,createdAt: new Date(), updatedAt: new Date()},
]);

await queryInterface.bulkInsert('Group', [
  {nombre: 'Group1',creatorId:1,createdAt: new Date(), updatedAt: new Date()},
  {nombre: 'Group2',creatorId:3,createdAt: new Date(), updatedAt: new Date()},
]);

await queryInterface.bulkInsert('Conversation', [
  {estilo: 'style1',createdAt: new Date(), updatedAt: new Date()},
  {estilo: 'style2',createdAt: new Date(), updatedAt: new Date()},
]);

await queryInterface.bulkInsert('Message', [
  {converId: 1,text: 'texto1-1', userId: 1,createdAt: new Date(), updatedAt: new Date()},
  {converId: 1,text: 'texto2-1', userId: 2,createdAt: new Date(), updatedAt: new Date()},
  {converId: 1,text: 'texto3-1', userId: 1,createdAt: new Date(), updatedAt: new Date()},
  {converId: 1,text: 'texto4-1', userId: 2,createdAt: new Date(), updatedAt: new Date()},
  {convertId: 2,text: 'texto1-2', userId: 4,createdAt: new Date(), updatedAt: new Date()},
  {convertId: 2,text: 'texto2-2', userId: 6,createdAt: new Date(), updatedAt: new Date()},
  {convertId: 2,text: 'texto3-2', userId: 4,createdAt: new Date(), updatedAt: new Date()},
]);


await queryInterface.bulkInsert('Member', [
  {userMain: 1, userSub: 2,createdAt: new Date(), updatedAt: new Date()},
  {userMain: 1, userSub: 3,createdAt: new Date(), updatedAt: new Date()},
  {userMain: 1, userSub: 4,createdAt: new Date(), updatedAt: new Date()},
  {userMain: 1, userSub: 5,createdAt: new Date(), updatedAt: new Date()},
  {userMain: 2, userSub: 3,createdAt: new Date(), updatedAt: new Date()},
  {userMain: 2, userSub: 1,createdAt: new Date(), updatedAt: new Date()},
]);

await queryInterface.bulkInsert('Friend', [
  {groupId: 1, userId: 1,createdAt: new Date(), updatedAt: new Date()},
  {groupId: 1, userId: 3,createdAt: new Date(), updatedAt: new Date()},
  {groupId: 1, userId: 4,createdAt: new Date(), updatedAt: new Date()},
  {groupId: 1, userId: 5,createdAt: new Date(), updatedAt: new Date()},
  {groupId: 2, userId: 3,createdAt: new Date(), updatedAt: new Date()},
  {groupId: 2, userId: 1,createdAt: new Date(), updatedAt: new Date()},
]);

await queryInterface.bulkInsert('Post', [
  {titulo: 'titulo1',body:'publicacion texto 1', asWho:0 ,idWho:1, userId: 1, opId:null,createdAt: new Date(), updatedAt: new Date()},
  {titulo: null,body:'publicacion texto 1-1', asWho:0 ,idWho:2, userId: 2, opId:1,createdAt: new Date(), updatedAt: new Date()},
  {titulo: null,body:'publicacion texto 1-2', asWho:0 ,idWho:3, userId: 3, opId:1,createdAt: new Date(), updatedAt: new Date()},
  {titulo: null,body:'publicacion texto 1-3', asWho:0 ,idWho:1, userId: 1, opId:1,createdAt: new Date(), updatedAt: new Date()},

]);


   
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Post', null, {});
    await queryInterface.bulkDelete('User', null, {})
    await queryInterface.bulkDelete('Friend', null, {})
    await queryInterface.bulkDelete('Message', null, {})
    await queryInterface.bulkDelete('Vet', null, {})
    await queryInterface.bulkDelete('Group', null, {})
    await queryInterface.bulkDelete('Member', null, {})
    await queryInterface.bulkDelete('Service', null, {})
    await queryInterface.bulkDelete('Conversation', null, {})
    await queryInterface.bulkDelete('Pet', null, {})
  }
};
