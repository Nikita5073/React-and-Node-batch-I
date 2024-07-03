// User se 5 input lena hai, inka product nikalna hai. Agar product > 500
// hai to ek function call karna hai, jisme product aur ek user input ko
// divide karna hai aur result return karna hai. Agar result integer hai
// to factorial nikalna hai aur result return karna hai.

function divide(product)
{
    let x = 2;
    return (product/x);

}

function main()
{
    let a = 5;
    let b = 6;
    let c = 3;
    let d = 8;
    let e = 2;
    let product = (a*b*c*d*e);
    if(product>500)
    {
        let res = divide(product);
    }
}

main();