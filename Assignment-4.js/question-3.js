// User se 6 input lena hai, inka maximum nikalna hai. Agar maximum > 75
// hota hai to ek function call karna hai, jisme maximum aur 2 user
// inputs ko subtract karna hai aur result return karna hai. Agar result
// negative hai to absolute value nikal kar factorial return karna hai.

function factorial(res)
{
    let fact=1;
    for(let i=1; i<=res; i++)
    {
        fact=fact*i
    }
    return fact;
}

function subtract(max)
{
    let x = 115;
    return (max-x);
}

function main()
{
    let a = 80;
    let b = 25;
    let c = 95;
    let d = 72;
    let e = 55;
    let f = 89;
    // let maximum = Math.max(a,b,c,d,e,f);
    // console.log(maximum)

    let max = a;
    if(b>max) max=b;
    if(c>max) max=c;
    if(d>max) max=d;
    if(e>max) max=e;
    if(f>max) max=f;

    if(max>75)
    {
        let ans = (subtract(max));
        if(ans<0)
        {
            let res = Math.abs(ans);
            console.log(factorial(res));
        }
    }
}

main();

