//4..using rest operator function concept pass n no of arguments and  get the sum of odd numbers of it(reduce)

const summation = (...nums) => {
    return nums.reduce((oddsum,num) =>{
        if(num%2!=0)
            {
                return oddsum+num;
            }
            else{
                return oddsum;
            }
    },0);
}
console.log(summation(1,2,3,4,5,6));