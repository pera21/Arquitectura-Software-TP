const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => resp.status(200).send("Ping!"));

app.listen(port,() => console.log(`Escuchando en el puerto ${port}`));