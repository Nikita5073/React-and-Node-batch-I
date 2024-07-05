//2.  Create an object named product with at least 5 keys (e.g., productId, productName, price, category, tags). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.
const product = {
    productId: 1,
    productName: "Laptop",
    price: 1200,
    category: "Electronics",
    tags: ["portable", "high performance", "gaming"],
};

function printProductInfo({ productId, productName, price, category, tags }) {
    console.log("Product Information:");
    console.log(`Product ID: ${productId}`);
    console.log(`Product Name: ${productName}`);
    console.log(`Price: $${price}`);
    console.log(`Category: ${category}`);
    console.log(`Tags: ${tags}`);


    printTags(tags);

    printKeys(product);
}
function printTags(tags) {
    console.log("Tags:");
    tags.forEach(tag => console.log(tag));
}

function printKeys({ productId, productName, price, category, tags }) {
    console.log("productId:", productId);
    console.log("productName:", productName);
    console.log("price:", price);
    console.log("category:", category);
    console.log("tags:", tags);
}

printProductInfo(product);