require('dotenv').config();  // Si tu utilises un fichier .env
const mongoose = require('mongoose');

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${pw}@cluster0.dewun.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connexion à la base de données établie"))
  .catch(err => console.error("❌ Erreur lors de la connexion :", err));
