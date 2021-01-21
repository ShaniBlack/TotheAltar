const express = require("express");
const cors = require("cors");

// const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist'
// );
// All you have to do is make sure that you have an .env file with input values for the atlas db connection and plug that into heroku upon deployment as well

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
