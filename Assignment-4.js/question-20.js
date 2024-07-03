// User se 4 input lena hai, inka maximum nikalna hai. Agar maximum > 20
// hai to ek function call karna hai aur check karna hai wo prime hai ya
// nahi. Agar prime hai to uska double return karna hai.

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
    let a =  24;
    let b = 30;
    let c = 43;
    let d = 35;
    let max = Math.max(a,b,c,d);
    if(max>20)
    {
        let res = primeNum(max);

        if(res)
        {
            console.log (max*max);
        }
    }
}

console.log(main());