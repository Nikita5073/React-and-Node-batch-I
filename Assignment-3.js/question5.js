//5..using rest operator function concept pass n no of arguments an get the sum of all prime numbers of it(reduce)

const primeNum = (...nums)=>{
    return nums.reduce((sum,num)=>{
        if(num<=1)
        {
            return sum;
        }
        for(let i =2; i<nums.length; i++)
        {
            if(num%i==0)
            {
                return sum;
            }
            else{
                return sum+num;
            }
        }
    },0)
}

console.log(primeNum(1,2,3,4,5,6,7,8));