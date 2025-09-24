const books = [
    {id:1, titulo : "Las noches blancas"},
    {id:2 , titulo: "El arte de que todo te importe un carajo"},
    {id:3 , titulo: "Meditaciones"}
]


function getAllBooks(){
    return books
}

function getBookById(id){
    return books.find(b => b.id == id)
}


module.exports = {getAllBooks, getBookById};