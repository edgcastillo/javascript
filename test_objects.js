//library has many books, each book has a title - author - genre  - include isbn to each book
var library = {};
library = {
	numberOfBooks: 0,
	books: [] 
}

function addBook(title,author,genre){
	library.numberOfBooks++;
	library.books["Book" + library.numberOfBooks] = ({title:title, author:author, genre:genre});
}

addBook("Sherlock Holmes","Sir Arthur Conan Doyle","Fiction");
addBook("Cien Anos de Soledad", "Gabriel Garcia Marquez", "Fiction");
addBook("El Coronel no Tiene Quien le Escriba", "Gabriel Garcia Marquez", "Fiction");
addBook("El Capitan Alatriste","Arturo Perez-Reverte","Fiction");

console.log(library);
console.log(library.books.Book1);