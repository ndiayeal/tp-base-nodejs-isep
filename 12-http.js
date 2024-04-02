const http = require('http');

const server = http.createServer((req, res) => {
	//res.write("Bienvenue à la page d'accueil de mon premier projet nodejs");
	
	res.setHeader('Content-Type', 'text/html');
	res.end("<h1>Bienvenue à la page d'accueil de mon premier projet nodejs</h1>");
});

server.listen(5000, 'localhost', () => {
	console.log("server running ....");
});