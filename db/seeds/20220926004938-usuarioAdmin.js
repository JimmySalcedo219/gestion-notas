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
      apellidos: 'Molina Salcedo', 
      nombres: 'Yeison Andres', 
      username: 'admin', 
      rol: 'administrador',
      pass: generateHash('1234'),
      id: 1
      
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
