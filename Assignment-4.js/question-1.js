// User se 4 input lena hai, inka sum nikalna hai. Agar sum > 100 hota hai to
// ek function call karna hai, jisme 3 input lena hai aur unka average return
// karna hai. Agar returned average > 50 hai to ek aur function call karke
// factorial nikalna hai aur check karna hai wo prime number hai ya nahi.


function prime_num(res)
{
    if(res<=1)
    {
        return false
    }
    for(let i=2; i<res; i++)
    {
        if(res%i==0)
        {
            return false;
        }
    }
    return true;
}

function factorial(ans)
{
    let fact = 1;
    for(let i=1; i<=ans; i++)
    {
        fact = fact*i;
    }
    return fact;
}

function average()
{
    let x = 85;
    let y = 55;
    let z = 45;
    return ((x+y+z)/3);
}

function main()
{
    let a = 20;
    let b = 40;
    let c = 25;
    let d = 55;
    let sum = (a+b+c+d)
    if(sum>100)
    {
        let ans = average();
        if(ans>50)
        {
            let res = factorial(ans);
            if(prime_num(res))
            {
                console.log("prime number")
            }
            else{
                console.log("not aprime number")
            }
        }
    }
}

main();
