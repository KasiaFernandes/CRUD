var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var stringifyFile

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
        console.log('file displayed');
    });
});

app.post('/updateNote/:note', function (req, res) {
    var newData = req.params.note;
    fs.appendFile('./test.json', newData, function (err) {
        if (err) throw err;
        res.send('data appended to the file!');
        console.log('data appended!');
    });

    /*
    fs.writeFile('./test.json', stringifyFile, function (err, data) {
        if (err) throw err;
        stringifyFile = data + req.params.note;
        res.send(data + req.params.note);
        console.log('file updated');
    });
    */


});

app.listen(3000);

