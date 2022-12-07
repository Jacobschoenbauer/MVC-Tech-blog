const router = require("express").Router();
const Blog = require("../models/blog");

router.get("/", async (req, res) => {
  const blogData = await Blog.findAll().catch((err) => {
    res.json(err);
  });
  const blogges = blogData.map((dish) => dish.get({ plain: true }));
  res.render("all", { blogges });
});

router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    if (!blogData) {
      res.status(404).json({ message: "No blog with this id!" });
      return;
    }
    const blog = blogData.get({ plain: true });
    res.render("blog", blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {})

router.get("/login", (req, res) => {
  if (req.session.log) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
