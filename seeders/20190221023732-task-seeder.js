'use strict';

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {

    let tasks = [];

    for(let i = 0; i < 10; i++){
      const task = {
        name: faker.lorem.word(),
        description: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      tasks.push(task);
    }

    return queryInterface.bulkInsert('Tasks', tasks, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
