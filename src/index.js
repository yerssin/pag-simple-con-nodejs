const express = require("express"); // llmando un modulo usando su mismo nombre
const app = express(); //ejecutar la funcion que devolvera un obj que lo guardare en la const app
const path = require("path"); //se usa para poder usar contra barras /\ tanto en linuix como windows

//settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile); //USARE los archivos html pero seran procesados por ejs y renderizare por el motor de plantillas renderFile
app.set("view engine", "ejs"); //motor de plantilla que uso

//routes
app.use(require("./routes/index"));

//static files
app.use(express.static(path.join(__dirname, "public"))); // estoy dando la direccion public al modulo de express. static
/* esta creara un servidor = app */
/* servidor ejecutate en puerto 3000 y envia este mensaje */
app.listen(3000, () => {
  console.log("server on port", 3000);
});
