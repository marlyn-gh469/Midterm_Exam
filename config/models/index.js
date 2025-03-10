const sequelize = require("../config/database");
const User = require("./user");

const db = { sequelize, User };


sequelize.sync()
    .then(() => console.log("✅ Tables synced successfully!"))
    .catch(err => console.error("❌ Sync error:", err));

module.exports = db;
