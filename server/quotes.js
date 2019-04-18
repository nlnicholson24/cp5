const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const quoteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  text: String,
  author: String,
});
const Quote = mongoose.model('Quote', quoteSchema);


router.post("/", auth.verifyToken, User.verify, async (req, res) => {

  const quote = new Quote({
    user: req.user,
    text: req.body.text,
    author: req.body.author,
  });

  try {
    await quote.save();
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get("/", auth.verifyToken, User.verify, async (req, res) => {
  try {
    let quotes = await Quote.find({
      user: req.user
    }).sort({
      created: -1
    });
    return res.send(quotes);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete("/", auth.verifyToken, User.verify, async (req, res) => {
  try {
    console.log(req.body);
    let quote = await Quote.findOne({
      _id: req.body.id
    });
    quote.remove();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
})

router.get("/all", async (req, res) => {
  try {
    let quotes = await Quote.find().sort({
      created: -1
    }).populate('user');
    return res.send(quotes);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  model: Quote,
  routes: router,
};
