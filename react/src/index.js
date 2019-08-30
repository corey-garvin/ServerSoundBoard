import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const player = require('node-wav-player');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello from the best characters of Warcraft' });
});
  
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `This is the sound you want me to make: ${req.body.post}`,
    );
});

app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`),
);

// Peon
app.get('/api/play/peon', (req, res) => {
    player.play({
        path: './src/app/public/tummy.mp3',
    }).then(() => {
        console.log('The mp3 file started to be played successfully.');
    }).catch((error) => {
        console.error(error);
    });
});

// Peasant
app.get('/api/play/peasant', (req, res) => {
    player.play({
        path: './src/app/public/jobs-done.mp3',
    }).then(() => {
        console.log('The mp3 file started to be played successfully.');
    }).catch((error) => {
        console.error(error);
    });
});