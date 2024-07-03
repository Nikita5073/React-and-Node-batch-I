// User se 3 input lena hai, inka sum nikalna hai. Agar sum 0 hota hai
// to ek function call karna hai aur check karna hai ki wo perfect
// square hai ya nahi. Agar perfect square hai to uska square root
// nikalna hai aur result return karna hai.


function square_root(sum)
{
    for(let i=1; i<=(sum/2); i++)
    {
        let prod = i*i;
        if(prod==sum)
        {
            return i;
        }
    }

}

function perfect_sq(sum)
{
    for(let i=1; i<=(sum/2); i++)
    {
        let sq = i*i;
        if(sq==sum)
        {
            return true;
        }

    }
    return false;

}
function main()
{
    let a = 24;
    let b = 38;
    let c = 45;
    let sum = (a+b+c);
    if(sum==0)
    {
        if(perfect_sq(sum))
        {
            console.log(square_root(sum));
        }
    }
}

main();

