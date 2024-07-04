'use strict';

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert(
      "master_barangs",
      [
        {
          nm_barang: "Amoxsan",
          qty: 15,
          harga: 20000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nm_barang: "Panadol",
          qty: 10,
          harga: 10000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nm_barang: "Parasetamol",
          qty: 12,
          harga: 20000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nm_barang: "Promag",
          qty: 40,
          harga: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
     )
    },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('master_barangs',null,{})
  }
};
