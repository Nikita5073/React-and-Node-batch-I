// User se 5 input lena hai, inka maximum nikalna hai. Agar maximum > 90
// hota hai to ek function call karna hai, jisme maximum aur ek user
// input ko subtract karna hai aur result return karna hai. Agar result
// positive hai to us value ka cube return karna hai.

function cubeValue(result)
{
    return (result*result*result);
}

function subtract(max)
{
    let x =50;
    return (max-x);
}

function main()
{
    let a = 120;
    let b = 85;
    let c = 90;
    let d = 102;
    let e = 98;
    let max = Math.max(a,b,c,d,e);
    if(max>90)
    {
        let result = subtract(max);
        if(result>0)
        {
            console.log(cubeValue(result));
        }
    }
}

main();