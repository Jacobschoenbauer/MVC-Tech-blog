const router = require("express").Router();
const Blog = require("../../models/blog");

router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create({
      blog_title: req.body.blog_title,
      description: req.body.description,
      blogger_name: req.body.blogger_name,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const blog = await Blog.update(
      {
        blog_title: req.body.blog_title,
        description: req.body.description,
        blogger_name: req.body.blogger_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
