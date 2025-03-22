const express = require("express");
const router = express.Router();

const Article = require("../models/Article"); // Chemin vers ton modèle Article

// Route test
router.get("/test", (req, res) => {
  res.json({ message: "API TEST 4 fonctionne correctement !" });
});

router.get('/articles', async (req, res) => {
    try {
      const articles = await Article.find(); // Récupère tous les articles de la collection
      res.status(200).json(articles); // Retourne les articles sous forme de JSON
    } catch (err) {
      res.status(500).send('Erreur lors de la récupération des articles');
    }
  });
  
  // Route pour ajouter un article
  router.post('/add-article', async (req, res) => {
    try {
      const newArticle = new Article({
        nomarticle: req.body.nomarticle,
        prix: req.body.prix
      });
  
      // Sauvegarder l'article dans la collection
      await newArticle.save();
      res.status(201).send('Article ajouté avec succès');
    } catch (err) {
      res.status(500).send('Erreur lors de l\'ajout de l\'article');
    }
  });
  

module.exports = router;
