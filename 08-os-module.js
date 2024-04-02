const os = require('os');

//les informations sur l utilisateur actuel
const utilisateur = os.userInfo();
console.log(utilisateur);

//methode qui renvoie le temps de fonctionnement du systeme en secondes
console.log(`Le temps de fonctionnement du système est ${os.uptime()} secondes`);


const osCourant = {
	nom: os.type(),
	version: os.release(),
	memTotal: os.totalmem(),
	restant: os.freemem()
}


console.log(osCourant);