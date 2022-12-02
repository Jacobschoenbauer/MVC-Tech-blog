const User = require("./user");
const blog = require("./blog");

User.hasMany(blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Project.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Project };
