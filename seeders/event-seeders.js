module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Events", [
      {
        event_name: "Jack and Jill's Wedding",
        event_date: new Date(2021, 5, 25),
        bride_groom1: "Jack Norris",
        bride_groom2: "Jill McClain",
        budget: "30000",
        estimated_guests: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_email: "rycehe@gmail.com",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};
