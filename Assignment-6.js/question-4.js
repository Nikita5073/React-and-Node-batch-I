//4. Create an object named `restaurant` with at least 5 keys (e.g., `restaurantId`, `name`, `cuisine`, `rating`, `reviews`). One of the keys should have an array as its value. Then, create a function that accepts this object in a destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

const restaurant = {
    restaurantId: 101,
    name: "Delight Restaurant",
    cuisine: "Italian",
    rating: 4.5,
    reviews: ["Excellent food", "Great service", "Cozy ambiance"]
};

function printRestaurantInfo({ restaurantId, name, cuisine, rating, reviews }) 
{
    console.log(`Restaurant ID: ${restaurantId}`);
    console.log(`Name: ${name}`);
    console.log(`Cuisine: ${cuisine}`);
    console.log(`Rating: ${rating}`);
    console.log(`Reviews: ${reviews}`);

    printReviews(reviews);

    printKeys(restaurant);
}

function printReviews(reviews) {
    console.log("reviews:");
    reviews.forEach(review => console.log(review));
}

function printKeys({ restaurantId, name, cuisine, rating, reviews }) 
{
    console.log("Restaurant ID:",restaurantId);
    console.log("Name:",name);
    console.log("Cuisine:",cuisine);
    console.log("Rating:",rating);
    console.log("Reviews:",reviews);
}

printRestaurantInfo(restaurant);
