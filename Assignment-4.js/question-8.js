// User se 2 input lena hai, inka difference nikalna hai. Agar difference
// < 0 hai to absolute value return karna hai. Agar difference even hai
//  to ek function call karna hai aur us value ka cube return karna hai.

function cubeValue(ans)
{
    return (ans*ans*ans);
}


function main()
{
    let a = 34;
    let b = 56;
    let diff = (a-b);
    if(diff<0)
    {
        let ans = (Math.abs(diff));
        if(ans%2==0)
        {
            return (cubeValue(ans));
        }
    }
}

console.log(main());

