'use strict';

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
    
    await queryInterface.bulkInsert('Asignaturas', [{
      nombreAsig: 'Desarrollo de Software', 
      id: 1
      
    }, {
      nombreAsig: 'Inglés III', 
      id: 2
      
    }, {
      nombreAsig: 'Coach III', 
      id: 3
      
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
