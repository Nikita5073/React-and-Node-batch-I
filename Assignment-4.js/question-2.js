// User se 2 input lena hai, inka product nikalna hai. Agar product < 50
//  hota hai to ek function call karna hai, jisme product aur ek user
// input ko add karna hai aur result ko return karna hai. Agar returned
// value odd hai to ek aur function call karke us value ko square
// karna hai aur result return karna hai.

function square(ans)
{
    return (ans*ans);
}

function add(product)
{
    let x = 25;
    return (product + x);
}

function main()
{
    let a = 6;
    let b = 8;
    let product = (a * b);
    if(product<50)
    {
        let ans = (add(product));
        if(ans%2!=0)
        {
           console.log (square(ans));
        }
    }
}

main();

