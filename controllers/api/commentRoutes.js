const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body, "comment route hit");
    const newComment = await Comment.create({
      description:req.body.description,
      post_id:req.body.post_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
    console.log(newComment)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports=router;