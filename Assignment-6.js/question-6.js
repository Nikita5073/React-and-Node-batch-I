//6. Create a function named `addToBookCollection` that accepts an array of books and a new book to add. Each time the function is called, it should return a new array with the new book added at the end, without mutating the original array. Use the spread operator to achieve this.

function addToBookCollection(books, newBook) {
    return [...books, newBook];
}

const initialBooks = [{ title: "Book1" }, { title: "Book2" }];
console.log(initialBooks); 
const newBook1 = addToBookCollection(initialBooks,{ title: "Book3"});
console.log(newBook1); 
const newBook2 = addToBookCollection(newBook1,{title: "Book4"});
console.log(newBook2);  

