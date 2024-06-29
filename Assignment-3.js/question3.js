//3.using rest operator function concept pass n no of arguments and get the sum of even numbers of it (forEach)

const summation = (...nums) => {
    let sum=0;
    nums.forEach((num) =>{
        if(num%2==0)
            {
              sum+=num;
            }
    });
    return sum;
}
console.log(summation(1,2,3,4,5,6));