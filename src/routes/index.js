const express = require("express");
const router = express.Router();

//routes
router.get("/", (req, res) => {
  res.render("index.html", { title: "First website" });
  //cada vez que se entre a la ruta inical app.get("/", voy responder con un archivo res.sendFile y ese archivo esta en (path.join(__dirname, "views/index.html"));
});

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "contact page" });
});

module.exports = router; //son todas las rutas que voy a exportar a la pag principal en una sola linea de codigo app.use(require("./routes/index"));
