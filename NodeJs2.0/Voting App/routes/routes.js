const express = require("express");
const Router = express.Router();


Router.post('/signup', signup)
Router.post('/login', login)
Router.post('/candidates', addCandidate)
Router.get('/candidates', getCandidates)

Router.put('/candidates/:id', updateCandidate)
Router.delete('/candidates/:id', deleteCandidate)

