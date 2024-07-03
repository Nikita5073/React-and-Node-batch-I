// User se 2 input lena hai, inka product nikalna hai. Agar product < 20
// hai to ek function call karna hai aur product ko 5 se add karna hai
// aur result return karna hai.


function addFun(product)
{
    return (product+5);
}

let a = 3;
let b = 5;
let product = (a*b);
if(product<20)
{
    console.log(addFun(product));
}