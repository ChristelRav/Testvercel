const express = require("express");
const app = express();

// Middleware pour analyser le JSON
app.use(express.json());

// Importer les routes
const testRoutes = require("./routes/testroute");

// Utiliser les routes
app.use("/api", testRoutes);

// Définir le port pour Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
