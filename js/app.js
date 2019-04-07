const express = require("express");
const app = express();

app.get("/", (req, resp) => {
	resp.status(200).send("Ping!\n");
});

app.listen(PORT,() => {
	console.log("Escuchando en el puerto", PORT);
});