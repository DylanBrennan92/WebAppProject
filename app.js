var express = require('express');
var fs = require('fs');
var path = require('path');

/*
    Using the express module to handle routing/HTTP Verb reqs
    using fs to handle serving HTML files to the user
    Using path to direct user to assets in the public folder
    eg. javascript scripts and CSS stylesheets
*/
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

app.set('view engine', 'ejs');

//Handling a user requesting (GET) the index page
app.get('/', function(req, res){
    //serving static CSS files hosted in the public folder
    app.use(express.static(path.join(__dirname, 'public')));
    console.log('get req was made: ' + req.url);
    //serving Index.html file to the user
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
});

//Handling a metric form submission (POST)
app.post('/metric', urlencodedParser, function(req, res){
    console.log('received metric form POST');
    console.log(req.body);
    
    if(req.body.gender=="male"){ //Metric male
        var bmr = 66.5 +(13.75*req.body.weight)+(5.003*req.body.height)-(6.755*req.body.age);
        bmr = bmr.toFixed(0);
        console.log('BMR is ' + bmr);
        var data = {BMR: bmr};
        res.render('success.ejs', {data: data});
    }
    else if(req.body.gender=="female"){   //Metric female
        var bmr = 655.1 +(9.563*req.body.weight)+(1.850*req.body.height)-(4.676*req.body.age);
        bmr = bmr.toFixed(0);
        console.log('BMR is ' + bmr);
        var data = {BMR: bmr};
        res.render('success.ejs', {data: data});
    }
    else{
        console.log('error');
        res.render('failure,ejs');
    }
});
//Handling an imperial form submission (POST)
app.post('/imperial', urlencodedParser, function(req, res){
    console.log('received imperial form POST');
    console.log(req.body);

    if(req.body.gender=="male"){ //Imperial male
        var bmr = 66 +(6.2*req.body.weight)+(12.7*req.body.height)-(6.76*req.body.age);
        bmr = bmr.toFixed(0);
        console.log('BMR is ' + bmr);
        var data = {BMR: bmr};
        res.render('success.ejs', {data: data});
    } 
    else if(req.body.gender=="female"){   //Imperial female
        var bmr = 655.1 +(4.35*req.body.weight)+(4.7*req.body.height)-(4.7*req.body.age);
        bmr = bmr.toFixed(0);
        console.log('BMR is ' + bmr);
        var data = {BMR: bmr};
        res.render('success.ejs', {data: data});
    } 
    else{
        console.log('error');
        res.render('failure,ejs');
    }
});

app.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');