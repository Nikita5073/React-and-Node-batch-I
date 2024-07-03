// User se 3 input lena hai, inka average nikalna hai. Agar average < 25
// hai to ek function call karna hai aur check karna hai ki wo prime
// number hai ya nahi. Agar prime hai to uska factorial return karna hai.

function factorial(avg)
{
    fact=1;
    for(let i=1; i<=avg; i++)
    {
        fact = fact * i;
    }
    return fact;
}

function primeNumber(avg)
{
    if(avg<=1)
    {
        return false;
    }
    for(let i=2; i<avg; i++)
    {
        if(avg%i==0)
        {
            return false;
        }
    }
    return true;
}

function main()
{
    let a = 24;
    let b = 15;
    let c = 17;
    let avg = ((a+b+c)/3);
    avg = Math.ceil(avg);
    if(avg<25)
    {
        if(primeNumber(avg))
        {
            console.log(factorial(avg));
        }
    }
}

main();

