// User se 6 input lena hai, inka average nikalna hai. Agar average > 70
// hai to ek function call karna hai, jisme 4 input lena hai aur unka
// maximum return karna hai. Agar maximum > 50 hai to uska cube return
// karna hai.

function maxNum()
{
    let w = 65;
    let x = 46;
    let y = 82;
    let z = 54;
    return (Math.max(w,x,y,z))
}


function main()
{
    let a = 84;
    let b = 93;
    let c = 70;
    let d = 80;
    let e = 75;
    let f = 85;
    let avg = (a+b+c+d+e+f)/6;
    if(avg>70)
    {
        let res = maxNum();
        if (res>50)
        {
            return (res*res*res);
        }
    }

}

console.log(main());