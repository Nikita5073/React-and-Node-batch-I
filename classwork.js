// 1. You have several objects and need to pass them to a function. Inside the function, use the rest operator to handle the objects and print each one. Write the function and explain the process.


// const printobject = (...objects) => {
//   objects.forEach((object) => {
//     console.log(object);
//   });
// };

// const obj1 = { name: "Alice" };
// const obj2 = { name: "kartika" };
// const obj3 = { name: "Piru" };

// printobject(obj1, obj2, obj3);


//2. Write a function that can take any number of arguments and return their sum. Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate using ForEach over them to calculate the sum.
// const summation = (...nums) =>{
//     let sum=0;
//     nums.forEach((num)=>{
//         sum+=num;
//     });
//     return sum;
// }
// console.log(summation(1,2,3,4,5));

//3. Write a function that can take any number of arguments and return their sum. Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate using reduce over them to calculate the sum.
// const summation = (...nums) =>{
//     return nums.reduce((sum,num) => sum+num,0);
// }

// console.log(summation(1,2,3,4,5));

//4.Write a function that can take any number of arguments and return their factorial number. Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate using reduce over them to calculate the factorial.
// const factorial = (...nums) =>{
//     return nums.reduce((fact,num) => fact*num,1);
// }
// console.log(factorial(1,2,3,4,5));

//5.Write a function that can take any number of arguments and return their maximum. Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate using reduce over them to calculate the maximum number.

const maximum = (...nums) =>{
    return nums.reduce((maxi,num) => (num>maxi ? num:maxi),0)
}
console.log(maximum(10,5,15,10,25));

//6.Write a function that can take any number of arguments and return their even sum only. Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate using reduce over them to calculate the sum.
// const summation = (...nums) => {
//     return nums.reduce((sumeven,num) => {
//         if(num%2==0)
//             {
//                 return sumeven+num;
//             }
//             else{
//                 return sumeven;
//             }
//     },0);
// }

// console.log(summation(1,2,3,4,5,6));