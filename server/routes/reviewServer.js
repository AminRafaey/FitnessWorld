const express = require("express");
const router = express.Router();
const Review = require("./model/review");

router.get("/allReview", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/addReview", async (req, res) => {
  const Addreview = new Review({
    name: req.body.name,
    title: req.body.title,
    review: req.body.review,
    date: req.body.date,
  });
  try {
    const review = Addreview.save();
    res.json(review);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
