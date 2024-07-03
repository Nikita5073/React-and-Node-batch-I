// User se 4 input lena hai, inka sum nikalna hai. Agar sum > 150 hai to
// ek function call karna hai, jisme 3 input lena hai aur unka sum return
// karna hai. Agar returned sum even hai to factorial nikalna hai aur
// result return karna hai.

function factorial(res)
{
    let fact = 1;
    for(let i=1; i<=res; i++)
    {
        fact = fact * i;
    }
    return fact;
}


function sum1()
{
    let x = 3;
    let y = 5;
    let z = 6;
    return (x+y+z);
}

function main()
{
    let a = 54;
    let b = 67;
    let c = 80;
    let d = 74;
    let sum = (a+b+c+d);
    if(sum>150)
    {
       let res = sum1();
       if(res%2==0)
       {
         return (factorial(res));
       }
    }
}

console.log(main());