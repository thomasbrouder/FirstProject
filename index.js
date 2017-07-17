let express = require('express'); // on récupère la dépendance js

let app = express(); // On créé une application

//app.use(express.static(__dirname + '/front'));  On dit queles fichiers statiques sont dans le dossier front. Pas utile pour ce projet

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html')); // Connection au serveur Quand on va appeler le serveur à la racine, on récupère res on lui renvoie le fichier index.html

app.get('/about', (req, res) => res.sendFile(__dirname + '/about.html'));

app.get('/hello', (req, res) => res.send("Bonjour "+ req.param('name')) ); // On récupère le query parameter 'name' i.e. ?id=name   Le ? dit différencie la route des query parameters

app.get('/book/:id', (req, res) => res.json({name:'book '+ req.params.id}));

app.listen(process.env.PORT || 3000, () => console.log('App running at http://localhost:3000')); // On lui dit sur quel port tourner
                                                                                                 // () => ... c'est callback= fonction qui est appelée une fois que c'est fini
// Le listen doit toujours venir en dernier. D'abord on référence tout ce qui est en rapport avec app puis on écrit le app listen

console.log("line 6");  // Affichée avant 'App running...' car js est un langage asynchrone --> il lance la ligne 5, la fonctio tourne puis il lit la ligne 6 et affiche la 5 quand le serveur a renvoyé la réponse

