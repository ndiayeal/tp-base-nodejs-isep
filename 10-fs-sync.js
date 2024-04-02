const fs = require('fs');

console.log('debut tache n°1');
const premier = fs.readFileSync('./contenu/premier.txt', 'utf8');
const second = fs.readFileSync('./contenu/deuxieme.txt', 'utf8');

fs.writeFileSync(
	'./contenu/resultat-sync.txt', 
	`Voici le résultat: \n\t-${premier} \n\t-${second}`,
	{flag: 'w'}
	);

console.log('fin tache n°1');
console.log('debut tache n°2');
