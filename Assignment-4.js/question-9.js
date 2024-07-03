// User se 4 input lena hai, inka product nikalna hai. Agar product > 1000
// hai to ek function call karna hai, jisme product aur ek user input ko
// divide karna hai aur result return karna hai. Agar result fraction hai
//  to uska ceiling value return karna hai.

function divide(product)
{
    let x = 2;
    return (product/x);
}

function main()
{
    let a = 12;
    let b = 8;
    let c = 5;
    let d = 15;
    let product = (a*b*c*d)
    if(product>1000)
    {
        let ans = divide(product);
        if(ans%1!==0)
        {
            return Math.ceil(ans)
        }

    }
}

console.log(main());


