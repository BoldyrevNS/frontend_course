const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "adventuretime",
    password: "Joker4753"
});

/////////////////////////////////////////////////////////put запросы//////////////////////////////////////////////////////////////////////////////////////////

app.put("/allcharactersUpdate", (req, res) => {
    const name = req.body.Name;
    const sex = req.body.Sex;
    const race = req.body.Race;
    const image = req.body.Image
    db.query("UPDATE allcharacters SET Name = ?, Sex = ?, Race = ? WHERE Image = ?", [name, sex, race, image], (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})

app.put("/maincharactersUpdate", (req, res) => {
    const name = req.body.Name;
    const age = req.body.Age;
    const first = req.body.FirstEpisode;
    const last = req.body.LastEpisode;
    const descript = req.body.Descript;
    db.query("UPDATE maincharacters SET Age = ?, Descript = ?, FirstEpisode = ?, LastEpisode = ? WHERE Name = ?", [age, descript, first, last, name], (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})

app.put("/evilscharactersUpdate", (req, res) => {
    const name = req.body.Name;
    const abilities = req.body.Abilities;
    db.query("UPDATE villains SET Abilities = ?  WHERE Name = ?", [abilities, name], (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})

app.put("/minorcharactersUpdate", (req, res) => {
    const name = req.body.Name;
    const season = req.body.Season;
    db.query("UPDATE minorcharacters SET Season = ?  WHERE Name = ?", [season, name], (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})


app.put("/placeUpdate", (req, res) => {
    const name = req.body.Name;
    const ruler = req.body.Ruler;
    const type = req.body.type;
    const descript = req.body.Descript;
    const image = req.body.Image;
    db.query("UPDATE places SET Name = ?, Ruler = ?, type = ?, Descript = ?  WHERE Image = ?", [name, ruler, type, descript, image], (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})

///////////////////////////////////////////////get запросы////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');

const path = require('path');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter 

const csvWriter = createCsvWriter({ 
    path: 'out.csv', 
    header: [ 
        {id: 'Name', title: 'Name'}, 
        {id: 'Sex', title: 'Sex'}, 
        {id: 'Race', title: 'Race'}, 
        {id: 'Image', title: 'Image'}, 
        {id: 'Category', title: 'Category'}, 
        ] 
}); 




///////////////////////общие запросы//////////////////////////////////////

app.get('/allcharacters', (req, res) => {
    db.query("SELECT * FROM allcharacters", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
            const PDFGenerator = require('pdfkit')
            let theOutput = new PDFGenerator 
            theOutput.pipe(fs.createWriteStream('TestDocument.pdf'))
            let object;
            let str;
            for (let i = 0; i < data.length; i++){
                object = JSON.stringify(data[i].Image);
                str = object.slice(1,-1);
                console.log(str)
                theOutput.text(`Character ${i+1}`, { bold: true,
                    underline: true,
                    align: 'center'
                })
                theOutput.image(`${str}`, { fit: [250,250], align: 'center' })
            }
            theOutput.end()
        }
    })
})

app.get('/maincharacters', (req, res) => {
    db.query("SELECT * FROM maincharacters", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/minorcharacters', (req, res) => {
    db.query("SELECT * FROM minorcharacters", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/evils', (req, res) => {
    db.query("SELECT * FROM villains", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/place', (req, res) => {
    db.query("SELECT * FROM places", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/administrator', (req, res) => {
    db.query("SELECT password FROM admin", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

//////////////////////////////////Тип места//////////////////////////////////////////////////////////////////
app.get('/Type=1', (req, res) => {
    db.query("SELECT * FROM places WHERE Type = 'Королевство' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Type=2', (req, res) => {
    db.query("SELECT * FROM places WHERE Type != 'Королевство' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

///////////////////////////////////Королевская власть картинки/////////////////////////////////////////////////
app.get('/ImgRuler=1', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Принцесса Черепаха' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=2', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Великий Мастер Волшебник' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=3', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Граф Лимонохват' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=4', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Боннибель' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=5', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Принцесса Завтрак' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=6', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Ледяной Король' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=7', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Гроб Гоб Глоб Грод' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=8', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Бог Тусовок' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=9', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Принцесса Пламя (Фиби)' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=10', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Принцесса Пупырчатого Королевства' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=11', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Принцесса Слизь' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=12', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Принцесса Хот-Дог' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=13', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Принцесса Ягода' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/ImgRuler=14', (req, res) => {
    db.query("SELECT Image FROM allcharacters WHERE Name = 'Хансон Абадир' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})
////////////////////////////////Способности//////////////////////////////////////////

app.get('/Abilities=1', (req, res) => {
    db.query("SELECT * FROM villains WHERE Abilities = 'Интеллектуальные'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Abilities=2', (req, res) => {
    db.query("SELECT * FROM villains WHERE Abilities = 'Магические'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Abilities=3', (req, res) => {
    db.query("SELECT * FROM villains WHERE Abilities = 'Физические'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

///////////////////////////////Сезоны//////////////////////////////////////////

app.get('/Season=1', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '1'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Season=2', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '2'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Season=3', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '3'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Season=4', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '4'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Season=5', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '5'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Season=6', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '6'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Season=7', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '7'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Season=8', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '8'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Season=9', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '9'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Season=10', (req, res) => {
    db.query("SELECT * FROM minorcharacters WHERE Season = '10'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

///////////////////////////////Эпизоды//////////////////////////////////////////

app.get('/Episode=0', (req, res) => {
    db.query("SELECT * FROM episodes WHERE Name = 'Адское пламя' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Episode=1', (req, res) => {
    db.query("SELECT * FROM episodes WHERE Name = 'Весёлые секреты, Часть 2' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Episode=2', (req, res) => {
    db.query("SELECT * FROM episodes WHERE Name = 'Время Бизнеса' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Episode=3', (req, res) => {
    db.query("SELECT * FROM episodes WHERE Name = 'Заварушка на пирушке' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Episode=4', (req, res) => {
    db.query("SELECT * FROM episodes WHERE Name = 'Заложники любви' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Episode=5', (req, res) => {
    db.query("SELECT * FROM episodes WHERE Name = 'Изгнаны!' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Episode=6', (req, res) => {
    db.query("SELECT * FROM episodes WHERE Name = 'Неладно что-то в Пупырчатом Королевстве' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Episode=7', (req, res) => {
    db.query("SELECT * FROM episodes WHERE Name = 'Пойдём со мной' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Episode=8', (req, res) => {
    db.query("SELECT * FROM episodes WHERE Name = 'Три ведра' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

//////////////////////////////пол////////////////////////////////////////

app.get('/Sex=Female', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=No', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Бесполый' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


///////////////////////Раса/////////////////////////////////////////

app.get('/Race=Magic', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Волшебники' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=CandyPeople', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Конфетный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=SpaceThing', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Космическая сущность' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=People', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Vampires', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Вампиры' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Fire', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Пламенный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Lumpy', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Пупырчатые люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Rainicorns', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Радугарог' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=MOs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Роботы МО' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Dogs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Собака' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Banana', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Бананы' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Wolfes', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Волки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Mars', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Марсианин' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=None', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Неизвестно' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Orgalog', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Оргалорг' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Elephant', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Слон' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Peoplebutnot', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Человекоподобные' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Demons', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Демоны' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=BreakfastP', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Завтрачные люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Lemons', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Лимонные люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Rusalky', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Русалки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Slime', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Слизь' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Tortle', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Черепаший народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Wellberry', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Ягодный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


///////////////////////Описание рас/////////////////////////////////////////

app.get('/DeskriptRace=Magic', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Волшебники' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=CandyPeople', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Конфетный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=SpaceThing', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Космическая сущность' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=People', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Vampires', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Вампиры' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Fire', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Пламенный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Lumpy', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Пупырчатые люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Rainicorns', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Радугарог' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=MOs', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Роботы МО' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Dogs', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Собака' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Banana', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Бананы' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Wolfes', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Волки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Mars', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Марсианин' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=None', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Неизвестно' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Orgalog', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Оргалорг' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Elephant', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name= 'Слон' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Peoplebutnot', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Человекоподобные' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Demons', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Демоны' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=BreakfastP', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Завтрачные люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Lemons', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Лимонные люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Rusalky', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Русалки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Slime', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Слизь' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Tortle', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Черепаший народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Wellberry', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Ягодный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

//////////////////////Раса + женский пол//////////////////////////////////////////

app.get('/Sex=Female/Race=CandyPeople', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Конфетный народ'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


app.get('/Sex=Female/Race=Vampires', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Вампиры'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Fire', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Пламенный народ'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Lumpy', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Пупырчатые люди'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Rainicorns', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Радугарог'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


app.get('/Sex=Female/Race=Dogs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Собака'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=People', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Люди'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


app.get('/Sex=Female/Race=None', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Неизвестно' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


app.get('/Sex=Female/Race=Elephant', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Слон' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Peoplebutnot', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Человекоподобные' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


app.get('/Sex=Female/Race=BreakfastP', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Завтрачные люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


app.get('/Sex=Female/Race=Rusalky', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Русалки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Slime', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Слизь' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Tortle', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Черепаший народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Wellberry', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Ягодный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


//////////////////////Раса + мужской пол//////////////////////////////////////////

app.get('/Sex=Male/Race=Magic', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Волшебники'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=CandyPeople', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Конфетный народ'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=SpaceThing', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Космическая сущность'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=People', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Люди'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


app.get('/Sex=Male/Race=Vampires', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Вампиры'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Fire', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Пламенный народ'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Dogs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Собака'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Banana', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Бананы' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Wolfes', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Волки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Mars', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Марсианин' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=None', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Неизвестно' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Orgalorg', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Оргалорг' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


app.get('/Sex=Male/Race=Peoplebutnot', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Человекоподобные' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Demons', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Демоны' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


app.get('/Sex=Male/Race=Lemons', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND  Race = 'Лимонные люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


//////////////////////Раса + бесполый пол//////////////////////////////////////////

app.get('/Sex=No/Race=MOs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Бесполый' AND Race = 'Роботы МО'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


///////////////////////////////Главные персонажи//////////////////////////////////////////

app.get('/Bonnie', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Боннибель' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Finn', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Финн Мёртенс' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Betty', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Бетти Гроф' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/BMO', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'БиМО' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Jake', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Джейк' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Lady', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Леди Ливнерог' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/IceKing', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Ледяной Король' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Marselin', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Марселин Абадир' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Phibie', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Принцесса Пламя (Фиби)' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/PPK', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Принцесса Пупырчатого Королевства' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Saimon', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Саймон Петриков' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.listen(3001, () => {
    console.log("Your server is running on port 3001...");
});