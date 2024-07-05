//5. Create an object named `library` with at least 5 keys (e.g., `libraryId`, `libraryName`, `location`, `books`, `staff`). One of the keys should have an array as its value. Then, create a function that accepts this object in a destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

const library = {
    libraryId: 1,
    libraryName: "City Central Library",
    location: "Mansarower",
    books: ["1984", "To Kill a Mockingbird", "The Great Gatsby"],
    staff: ["Nikita", "Shruti", "Vishal"]
};

function printLibraryInfo({ libraryId, libraryName, location, books, staff }) {
    console.log(`Library ID: ${libraryId}`);
    console.log(`Library Name: ${libraryName}`);
    console.log(`Location: ${location}`);
    console.log(`Books: ${books}`);
    console.log(`Staff: ${staff}`);

    printBooks(books);

    printKeys(library);
}

function printBooks(books) {
    console.log("books:");
    books.forEach(book => console.log(book));
}

function printKeys({ libraryId, libraryName, location, books, staff }) 
{
    console.log("Library ID:",libraryId);
    console.log("Library Name:",libraryName);
    console.log("Location:",location);
    console.log("Books:",books);
    console.log("Staff:",staff);
}

printLibraryInfo(library);
