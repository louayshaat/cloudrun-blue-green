const express = require('express');
const app = express();

const catNames = ['Luna', 'Bella', 'Lily', 'Lucy', 'Nala', 'Kitty', 'Chloe', 'Stella', 'Zoe', 'Lola'];

app.get('/', (req,res) => {
	res.send('Endpoints - /cat');
});

app.get('/cat', (req,res) => {
	res.send({ 'name': catNames[Math.floor(Math.random() * catNames.length)]});
});

const appPort = process.env.PORT || 5050;

app.listen(appPort, '0.0.0.0', function() {
  console.log('cat server started, listening on port', appPort);
});
