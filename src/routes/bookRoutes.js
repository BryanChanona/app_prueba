const url = require("url");
const bookController = require("../controllers/bookController.js");

function handleBookRouter( req, res) {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    if(path === "/books" && method === "GET"){
        bookController.getBooks(req, res);
    }else if(path.startsWith("/books/") && method === "GET"){
        const id = path.split("/")[2];
        bookController.getBookById(req, res, id);
    }else{
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Ruta no encontrada" }));
    }
} 

module.exports = handleBookRouter;
