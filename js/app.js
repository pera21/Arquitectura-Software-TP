const express = require("express");
const app = express();
const port = 3000;

app.get("/ping", (req, res) => res.status(200).json({'ping': 1}));

app.get("/timeout/:timeout", (req, res) => {
	var time = req.params.timeout;
	setTimeout(() => res.status(200).json({'timeout': time}), time*1000);
});

app.get("/fibonacci/:n", (req, res) => {
	var n = req.params.n;
	res.status(200).json({'result': fibonacci(parseInt(n))});
});

var fibonacci = (n) => {
	if (n <= 1)
		return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

app.listen(port,() => console.log(`Escuchando en el puerto ${port}`));
