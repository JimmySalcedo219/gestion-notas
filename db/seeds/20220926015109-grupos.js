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
  
    await queryInterface.bulkInsert('Grupos', [{
      nomgrupo: '3-1', 
      id: 1
    }, {
      nomgrupo: '3-2', 
      id: 2
    }, {
      nomgrupo: '3-3', 
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
