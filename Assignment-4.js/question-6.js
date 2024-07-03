// User se 4 input lena hai, inka minimum nikalna hai. Agar minimum < 10
// hai to ek function call karna hai aur minimum ko 5 se multiply karna
// hai aur result return karna hai. Agar result > 50 hai to factorial
// nikalna hai aur result return karna hai.

function factorial(result)
{
    let fact = 1;
    for(let i=1; i<=result; i++)
    {
        fact = fact*i;
    }
    return fact;
}

function multiply(min)
{
    return (min*5);
}


function main()
{
    let a = 26;
    let b = 6;
    let c = 13;
    let d = 41;
    // let min = Math.min(a,b,c,d)
    // console.log(min);

    let min = a;
    if(b<min) min=b;
    if(c<min) min=c;
    if(d<min) min=d;
    if(min<10)
    {
        let result = multiply(min);
        if(result>50)
        {
            console.log(factorial(result));
        }
    }

}

main();

