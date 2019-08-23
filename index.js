const dirTree = require("directory-tree");
const express = require("express");
const app = express();
const port = 3000;
const soundsRoot = "/Users/corey/Downloads/music/";
const soundPlayer = require("play-sound")(opts = {});
var bodyParser = require('body-parser');
var cors = require('cors');

app.get("/", (req, res) => res.send("Dude, there's nothing here!"));
app.use(bodyParser.json());
app.use(cors());

// Get a tree of files/folders
app.get("/listing", (req, res) => {
    const filteredTree = dirTree(soundsRoot, { extensions: /\.(wav|mp3|)$/i });
    trimPath(filteredTree);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(filteredTree));
})

app.post("/play", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    soundPlayer.play(soundsRoot + req.body.file, function(err) {
        console.log("Could not find/play audio file: " + soundsRoot + req.body.file);
    });
    res.end(JSON.stringify({"status": "thank you come again"}));
})

function trimPath(tree) {
    // Adjust the paths to be relative to our sounds dir
    if (!tree) {
        return;
    }
    tree.path = tree.path.replace("/Users/corey/Downloads/music/", "");
    (tree.children || []).forEach(trimPath);
}


// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));