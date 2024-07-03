// User se 5 input lena hai, inka average nikalna hai. Agar average > 60
// hai to ek function call karna hai, jisme 3 input lena hai aur unka
// product return karna hai. Agar product even hai to uska half return
// karna hai, agar odd hai to uska double return karna hai.

function multiply()
{
    let x = 2;
    let y = 5;
    let z = 8;
    return (x*y*z);
}

function main()
{
    let a = 56;
    let b = 73;
    let c = 84;
    let d = 55;
    let e = 62;
    let average = ((a+b+c+d+e)/5);
    if(average>60)
    {
        let ans = (multiply());
        if(ans%2==0)
        {
            return (ans/2);
        }
        else{
            return (ans*ans);
        }
    }

}

console.log(main());

