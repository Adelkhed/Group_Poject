import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Assure-toi d'importer correctement le fichier App.jsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />  {/* Rend l'application sans UserProvider, gestion de l'utilisateur dans App.jsx */}
  </React.StrictMode>
);
