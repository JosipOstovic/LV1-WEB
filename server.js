const express = require("express");
const app = express();

// Posluži sve fajlove iz mape 'public'
app.use(express.static("public"));

// Pokretanje servera
app.listen(3000, () => {
  console.log("Server pokrenut na http://localhost:3000");
});
