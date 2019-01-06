const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_complete", "root", "test_pass", {
  port: 33060,
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
