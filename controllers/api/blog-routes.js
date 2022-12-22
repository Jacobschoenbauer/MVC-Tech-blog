const router = require("express").Router();
const Blog = require("../../models/blog");
const User = require("../../models/user")
router.get('/', async (req, res) => {
  try { 
    const commentData = await Comment.findAll({
      include: [
          {
              model: User,
              attributes: ["name", "id"]
          },
      ],
    });
    res.status(200).json(commentData)
  } catch(err) {
    res.status(500).json(err)
  }
});

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
