'use strict';

const express = require("express");
const myData  = require("./movieData/Data.json")
const app = express();

app.get('/', dataHandler);
app.get('/favorite',favoritePage);
app.use("*", notFoundHandler);

function show (title,poster_path,overview){
    this.title       = title;
    this.poster_path = poster_path;
    this.overview    = overview;
   
};

function dataHandler(req, res){
    let result = [];
    myData.data.forEach((value) => {
        let myShow = new show(value.title,value.poster_path, value.overview);
        result.push(myShow);
    });
    return res.status(200).json(result);
};

function favoritePage(request, response){
    return response.status(200).send('Welcome to Favorite Page')
}

function  notFoundHandler(req,res){

    return res.status(404).send("Sorry, something went wrong");
}

app.listen(3000, () => {
    console.log("Listen on 3000");
});
