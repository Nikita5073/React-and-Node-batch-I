// User se 3 input lena hai, inka average nikalna hai. Agar average > 40
// hai to ek function call karna hai, jisme 2 input lena hai aur unka
// product return karna hai. Agar product negative hai to absolute value
// return karna hai.

function productAns()
{
    let x = -9;
    let y = 8;
    return (x*y);
}

function main()
{
    let a = 68;
    let b = 70;
    let c = 52;
    let avg = (a+b+c)/3;
    if(avg>40)
    {
        let ans = productAns();
        if(ans<0)
        {
            return Math.abs(ans);
        }
    }
}

console.log(main());