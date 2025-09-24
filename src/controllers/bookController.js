const bookModel = require("../models/bookModel.js");

function getBooks(req, res){
    const books = bookModel.getAllBooks();
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.end(JSON.stringify(books));
}

function getBookById(req, res, id){
    const book = bookModel.getBookById(id);
    if(book){
        res.writeHead(200,{"Content-Type" : "application/json"});
        res.end(JSON.stringify(book));
    } else{
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Libro no encontrado" }));
    }
}

module.exports = { getBooks, getBookById };