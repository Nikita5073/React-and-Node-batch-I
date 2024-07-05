//7. Create a function named `removeLastReview` that accepts an array of restaurant reviews. Each time the function is called, it should return a new array with the last review removed, without mutating the original array. Use the spread operator and array methods to achieve this.

function removeLastReview(reviews) {
    return reviews.slice(0, -1);
}

const initialReviews = ["Review1","Review2","Review3"];
console.log(initialReviews);
const newReview1 = removeLastReview(initialReviews); 
console.log(newReview1);
const newReview2 = removeLastReview(newReview1); 
console.log(newReview2);