module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
        name: 'Robert Santos',
        email: 'robertsantos.dfw@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Shani Black',
        email: 'shaniblack2004@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };

  