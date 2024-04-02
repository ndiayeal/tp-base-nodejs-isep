const {readFile, writeFile} = require('fs');

console.log('debut tache n°1');
readFile('./contenu/premier.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	
	const premier = result;
	readFile('./contenu/deuxieme.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		
		const second = result;
		
		writeFile(
			'./contenu/resultat-async.txt',
			`Voici le résultat: \n\t-${premier} \n\t-${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				
				console.log("tache n°1 terminee avec success");
			}
			);
	});
});

console.log('debut tache n°2');
