"use strict";
const { formatSlug } = require("../helpers/helpers");
const data = require("../data.json");
const newdata = require("../newdata.json");

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
    // console.log(Sequelize);

    const p = newdata.products.map((el, i) => {
      el.createdAt = el.updatedAt = new Date();
      el.slug = formatSlug(el.name);

      el.images.productId = i + 1;
      return el;
    });
    // console.log(p[0].images[0]);

    const images = newdata.products.map(el => {
      el.createdAt = el.updatedAt = new Date();
      delete el.name;
      delete el.description;
      delete el.mainImg;
      delete el.categoryId;
      delete el.authorId;
    });

    // const insertedProduct = products.map(el => {
    //   console.log(el);
    //   // delete el.images;
    // });

    // await queryInterface.insert("Products", data.products, {});

    // await queryInterface.bulkInsert("Products", insertedProduct, {});
    // await queryInterface.bulkInsert("Images", data.products, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Products", null, {});
  },
};
