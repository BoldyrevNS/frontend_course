const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "englishclub",
    password: "Joker4753"
});

/////////////////////////////////////////////////////////put запросы//////////////////////////////////////////////////////////////////////////////////////////

app.put("/wordsUpdate", (req, res) => {
    const id = req.body.id;
    const english = req.body.english;
    const transcription = req.body.transcription;
    const russian = req.body.russian
    db.query("UPDATE words SET english = ?, transcription = ?, russian = ? WHERE id = ?", [english, transcription, russian, id], (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})

app.put("/wordsAdd", (req, res) => {
    const english = req.body.english;
    const transcription = req.body.transcription;
    const russian = req.body.russian
    db.query(`INSERT words(english, transcription, russian) VALUES ('${english}', '${transcription}', '${russian}')`, (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})


app.put("/wordsDelete", (req, res) => {
    const id = req.body.id;
    db.query(`DELETE FROM words WHERE id='${id}'`, (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})

app.put("/usersAdd", (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    const rating = 0;
    db.query(`INSERT user(login, password, rating) VALUES ('${login}', '${password}', '${rating}')`, (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})

app.put("/ratingUpdate", (req, res) => {
    const id = req.body.id;
    const rating = req.body.rating;
    db.query("UPDATE user SET rating = ? WHERE id = ?", [rating, id], (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})


///////////////////////////////////////////////get запросы////////////////////////////////////////////////////////////////////////////////////////////


app.get('/words', (req, res) => {
    db.query("SELECT * FROM words", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/users', (req, res) => {
    db.query("SELECT * FROM user", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(3001, () => {
    console.log("Your server is running on port 3001...");
});