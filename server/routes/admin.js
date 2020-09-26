const express = require("express");
const router = express.Router();
const Members = require("./model/members");

router.get("/allMember", async (req, res) => {
  try {
    const member = await Members.find();
    res.json(member);
  } catch {
    res.json({ message: err });
  }
});

router.post("/addMember", async (req, res) => {
  const member = new Members({
    name: req.body.name,
    mail: req.body.mail,
    dob: req.body.dob,
    fee1: req.body.fee1,
    fee2: req.body.fee2,
    fee3: req.body.fee3,
  });
  try {
    const saveMember = await member.save();
    res.json(saveMember);
  } catch {
    res.json({ message: err });
  }
});

router.delete("/delMember/:name", async (req, res) => {
  try {
    const delMember = await Members.deleteOne({ name: req.params.name });
    res.json(delMember);
  } catch {
    res.json({ message: err });
  }
});

router.put("/feeUpdate/:name", async (req, res) => {
  try {
    const updateMember = await Members.updateOne(
      { name: req.params.name },
      { fee3: req.body.fee3 }
    );
    res.json(updateMember);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
