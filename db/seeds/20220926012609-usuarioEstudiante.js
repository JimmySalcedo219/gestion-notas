'use strict';

const { generateHash } = require("../../utils/encrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Usuarios', [{
      apellidos: 'Perez Sosa', 
      nombres: 'Luisa Maria', 
      username: 'Luisa', 
      rol: 'estudiante',
      pass: generateHash('1234'),
      id: 5
    }, {
      apellidos: 'Rojas Perez', 
      nombres: 'Carlos daniel', 
      username: 'Carlos', 
      rol: 'estudiante',
      pass: generateHash('1234'),
      id: 6,
    }, {
      apellidos: 'Salcedo Mendez', 
      nombres: 'Jimmy Orlando', 
      username: 'Jimmy', 
      rol: 'estudiante',
      pass: generateHash('1234'),
      id: 7, 
    }, {
      apellidos: 'Salcedo Ruiz', 
      nombres: 'Paula Andrea', 
      username: 'Paula', 
      rol: 'estudiante',
      pass: generateHash('1234'),
      id: 8, 
    }, {
      apellidos: 'Patiño Garcia', 
      nombres: 'Blanca Yanith', 
      username: 'Blanca', 
      rol: 'estudiante',
      pass: generateHash('1234'),
      id: 9, 
    }, {
      apellidos: 'Molina Salcedo', 
      nombres: 'Heidy Lorena', 
      username: 'Heidy', 
      rol: 'estudiante',
      pass: generateHash('1234'),
      id: 10, 
    }, {
      apellidos: 'Alvarez Lopez', 
      nombres: 'Hernando', 
      username: 'Hernando', 
      rol: 'estudiante',
      pass: generateHash('1234'),
      id: 11, 
    }, {
      apellidos: 'Castro Rozo', 
      nombres: 'Elizabeth', 
      username: 'elizabeth', 
      rol: 'estudiante',
      pass: generateHash('1234'),
      id: 12, 
    }, {
      apellidos: 'Zapata Sanchez', 
      nombres: 'Claudia Lorena', 
      username: 'Claudia', 
      rol: 'estudiante',
      pass: generateHash('1234'),
      id: 13 
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
