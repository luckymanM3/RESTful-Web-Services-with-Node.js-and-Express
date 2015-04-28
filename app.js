var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');


var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRouter = express.Router();

bookRouter.route('/Books')
    .post(function(req, res){
        var book = new Book(req.body);
        console.log(book);

        book.save();
        res.status(201).send(book);

    })
    .get(function(req, res){

        var query = {};

        if(req.query.genre){
            query.genre = req.query.genre;
        }

        Book.find(query, function(err, books){
            if(err){
                res.status(500).send(err);
            } else {
                res.json(books);
            }
        });
    });

bookRouter.route('/Books/:bookId')
    .get(function(req, res){

        if(req.query.genre){
            query.genre = req.query.genre;
        }

        Book.findById(req.params.bookId, function(err, book){
            if(err){
                res.status(500).send(err);
            } else {
                res.json(book);
            }
        });
    }
);


app.use('/api', bookRouter);

app.get('/', function(req,res){
    console.log('Welcome to my App');
    res.send('Welcome to my App');
});

app.listen(port, function(){
    console.log('Running on Port: ' + port);
});
