//2. Create an object named `book` with at least 5 keys (e.g., `bookId`, `title`, `author`, `price`, `genres`). One of the keys should have an array as its value. Then, create a function that accepts this object in a destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

const book = {
    bookId: 1,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 25.99,
    genres: ["Programming", "JavaScript", "Technology"]
};

function printBookInfo({ bookId, title, author, price, genres }) 
{
    console.log(`Book ID: ${bookId}`);
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Price: ${price}`);
    console.log(`Genres: ${genres}`);

    printGenres(genres);

    printKeys(book);
}

function printGenres(genres) {
    console.log("genres:");
    genres.forEach(genre => console.log(genre));
}

function printKeys({ bookId, title, author, price, genres }) 
{
    console.log("Book ID:",bookId);
    console.log("Title:",title);
    console.log("Author:",author);
    console.log("Price:",price);
    console.log("Genres:",genres);
}

printBookInfo(book);
