const express = require("express");
const app = express();
const port = 3000;
const MAX = 10000000000;

app.get("/", (req, resp) => resp.status(200).send("Ping!"));

app.get("/timeout", (req, res) => setTimeout(() => res.status(200).send('End timeout'), 5000));

app.get("/load", (req, res) => {
	for (var i = 0; i < MAX; i++) {}
	res.status(200).send(`Load! ${MAX}`);
});

app.listen(port,() => console.log(`Escuchando en el puerto ${port}`));
