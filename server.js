const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware pour analyser le JSON
app.use(express.json());

// Tester la connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Timeout de 5 secondes
})
.then(() => console.log("✅ Connexion réussie à MongoDB Atlas !"))
.catch(err => {
    console.error("❌ Erreur de connexion à MongoDB :", err);
    process.exit(1); // Arrêter le serveur en cas d'échec
});



// Importer les routes
const testRoutes = require("./routes/testroute");

// Utiliser les routes
app.use("/api", testRoutes);

// Définir le port pour Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
