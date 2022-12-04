const router = require("express").Router();
const blogRoutes = require("./blog-routes");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes, blogRoutes);

module.exports = router;
