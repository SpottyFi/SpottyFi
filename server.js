const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var compression = require('compression');

var server = express();
server.use(compression())
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, './'), { maxAge: '30 days' }));
server.use(cors());

// Albums & Player
server.get('/artists/albums/:artistID', (req, res) => {
  res.redirect('http://52.38.108.191' + req.url);
});

// Related Artists
server.get('/artist/:id/relatedArtists', (req, res) => {
  res.redirect('http://52.53.165.223' + req.url);
});

// Popular Songs
server.get('/artist/:id', (req, res) => {
  res.redirect('http://54.176.212.76' + req.url);
});

// Header
server.get('/artists/:artistID', (req, res) => {
  res.redirect('http://35.182.64.129' + req.url);
});

server.listen(80, console.log('Listening on:', 80));
