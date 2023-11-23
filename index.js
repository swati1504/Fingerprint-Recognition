const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const func = (path) => {
    return new Promise((resolve, reject) => {
        const { spawn } = require("child_process");
        const python = spawn("python3", ["script.py", path]);
        python.stdout.on("data", (data) => {

            if (!isNaN(parseInt(data.toString())) && parseInt(data.toString()) == data.toString()) {
                resolve(parseInt(data.toString()))
            }

        });
        python.stderr.on('data', (data) => {
            console.log("Error")
            reject(0)
        })
    })
};

app.post('/submit', async (req, res) => {
    try {
        if (fs.existsSync('data/test/' + req.body.imageName)) {
            const val = await func(req.body.imageName);
            return res.status(200).json(val);
        }
        return res.status(500).json({ message: "Error occured" });
    }
    catch {
        return res.status(500);
    }



})

const PORT = 3000;

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));