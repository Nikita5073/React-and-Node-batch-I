// User se 3 input lena hai, inka sum nikalna hai. Agar sum < 30 hai to
// ek function call karna hai aur sum ko 10 se multiply karna hai aur
// result return karna hai.

function mulFun(sum)
{
    return (sum*10);
}

function main()
{
    let a = 8;
    let b = 5;
    let c = 10;
    let sum = (a+b+c);
    if(sum<30)
    {
        console.log(mulFun(sum));
    }
}

main();