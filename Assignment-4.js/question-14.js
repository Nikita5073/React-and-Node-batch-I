// User se 2 input lena hai, inka maximum nikalna hai. Agar maximum > 30
// hai to ek function call karna hai aur check karna hai wo prime hai ya
// nahi. Agar prime hai to factorial return karna hai.

function factorial(max)
{
    let fact = 1;
    for(let i=1; i<=max; i++)
    {
        fact = fact * i;
    }
    return fact;
}

function primeNum(max)
{
    if(max<=1)
    {
        return false;
    }
    for(let i=2; i<max; i++)
    {
        if(max%i==0)
        {
            return false;
        }
    }
    return true;
}

function main()
{
    let a = 56;
    let b = 45;
    let max = Math.max(a,b);
    if(max>30)
    {
        let ans = primeNum(max);
        if(ans)
        {
            console.log(factorial(max));
        }
    }
}

main();

