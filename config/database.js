const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("your_database", "your_username", "your_password", {
    host: "localhost",
    dialect: "mysql"
});


sequelize.authenticate()
    .then(() => console.log("✅ Connected to MySQL successfully!"))
    .catch(err => console.error("❌ Unable to connect:", err));

module.exports = sequelize;
