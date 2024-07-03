// User se 4 input lena hai, inka sum nikalna hai. Agar sum < 50 hai to
// ek function call karna hai aur sum ka reverse nikalna hai aur result
// return karna hai. Agar reverse value even hai to uska half return
// karna hai.

function reverseFn(sum)
{
    let rev =0;
    let rem;

    while(sum>0)
    {
        rem = sum%10;
        rev = rev * 10 +rem;
        sum = parseInt(sum/10);
    }

    return (rev);
}

function main()
{
    let a = 12;
    let b = 9;
    let c = 16;
    let d = 11;
    let sum = (a+b+c+d);

    if(sum<50)
    {
        let ans = reverseFn(sum);

        if(ans%2==0)
        {
            return (ans/2);
        }
    }
}

console.log(main());