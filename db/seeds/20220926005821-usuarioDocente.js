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
      apellidos: 'Caicedo Rojas', 
      nombres: 'Edisson Rafael', 
      username: 'Edisson', 
      rol: 'docente',
      pass: generateHash('1234'),
      id: 2,
    }, {
      apellidos: 'Avila Marín', 
      nombres: 'Francia Esmeralda', 
      username: 'Francia', 
      rol: 'docente',
      pass: generateHash('1234'),
      id: 3,
    }, {
      apellidos: 'Diaz Garcia', 
      nombres: 'Camila andrea', 
      username: 'Camila', 
      rol: 'docente',
      pass: generateHash('1234'),
      id: 4
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
