'use strict';
const data = require('../data.json');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    data.categories.forEach(el => {
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('Categories', data.categories, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Categories', null, {});
  },
};
