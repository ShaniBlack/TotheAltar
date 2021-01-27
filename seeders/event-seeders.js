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
        user_email: "shaniblack2004@gmail.com",
      },
      {
        event_name: "Daniel and Rose's Wedding",
        event_date: new Date(2022, 10, 25),
        bride_groom1: "Daniel Sanchez",
        bride_groom2: "Rose Morales",
        budget: "21000",
        estimated_guests: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_email: "robertsantos.dfw@gmail.com",
      },
      {
        event_name: "Robert and Connie's Wedding",
        event_date: new Date(2023, 9, 15),
        bride_groom1: "Robert Jennings",
        bride_groom2: "Connie Chase",
        budget: "35500",
        estimated_guests: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_email: "robertsantos.dfw@gmail.com",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};
