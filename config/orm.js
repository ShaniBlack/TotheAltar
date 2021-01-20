var connection = require("./connection.js");

function createQmarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function translateSql(obj) {
  let arr = [];
  for (let key in obj) {
    let value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  //read the database
  SelectAll: function (table, cb) {
    let dbQuery = "SELECT * FROM " + table + ";";
    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
      console.log("this is the response" + res);
    });
  },

  //add to the database
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += createQmarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  //update the database
  updateOne: function (table, objColVals, condition, cb) {
    let dbQuery =
      "UPDATE " +
      table +
      " SET " +
      translateSql(objColVals) +
      " WHERE " +
      condition;

    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  //

  //delete from the database
  deleteOne: function (table, condition, cb) {
    let dbQuery = "DELETE FROM " + table + " WHERE " + condition;

    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  
};

module.exports = orm;