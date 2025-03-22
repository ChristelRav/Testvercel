const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  nomarticle: { type: String, required: true },
  prix: { type: Number, required: true }
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
