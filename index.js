const express = require('express');
const app = express();

const catNames = ['Luna', 'Bella', 'Lily', 'Lucy', 'Nala', 'Kitty', 'Chloe', 'Stella', 'Zoe', 'Lola'];

app.get('/', (req,res) => {
	res.send('Endpoint - /cat');
});

app.get('/cat', (req,res) => {
	res.send({ 'cat_name': catNames[Math.floor(Math.random() * catNames.length)], 'version': 'blue'});
});

app.get('/cats', (req, res) => {
	console.log('cats endpoint invoked .....');
	res.set('Cache-Control', 'public, max-age=300');
	res.set('Content-Type', 'application/json');
	res.send(catNames);
});

const appPort = process.env.PORT || 5050;

app.listen(appPort, '0.0.0.0', function() {
  console.log('cat server started, listening on port', appPort);
});
