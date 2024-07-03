// User se 3 input lena hai, unka sum nikalna hai. Agar sum > 80 hai to
// ek function call karna hai, jisme 2 input lena hai aur unka division
// result return karna hai. Agar result integer hai to us integer ka
// reverse return karna hai.


function reverse_num(result)
{
    let rev = 0;
    let rem;

    while(result)
    {
        rem = result%10;
        rev = rec *10 +rem;
        result=result/10;
    }
    return rev;
}

function division()
{
    let x = 32;
    let y = 4;
    return (x/y);
}

function main()
{
    let a = 98;
    let b = 84;
    let c = 91;
    let sum = (a+b+c);
    if(sum>80)
    {
        let result = division();
        if(result.isInteger())
        {
            let ans = reverse_num(result);
            console.log(ans);
        }
    }
}

main();

