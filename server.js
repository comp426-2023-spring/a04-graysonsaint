import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';

const argv = minimist(process.argv.slice(2));
const app = express();
const port = argv["port"] || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app/', function(req, res) {
    res.status(200).send('200 OK');
});

app.get('/app/rps/', function(req, res) {
    res.status(200).send(JSON.stringify(rps()));
});

app.get('/app/rpsls/', function(req, res) {
    res.status(200).send(JSON.stringify(rpsls()));
});

app.get('/app/rps/play/', function(req, res) {
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
});

app.post('/app/rps/play/', function(req, res) {
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
});

app.get('/app/rps/play/:shot/', function(req, res) {
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
});

app.get('/app/rpsls/play/', function(req, res) {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
});

app.post('/app/rpsls/play/', function(req, res) {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
});

app.get('/app/rpsls/play/:shot/', function(req, res) {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
});

app.get('/*', function(req, res) {
    res.status(404).send('404 NOT FOUND');
});

app.listen(port, function() {
    console.log(`listening on port ${port}`)
});