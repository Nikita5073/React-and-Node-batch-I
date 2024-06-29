//1. using rest operator function concept pass n no of arguments and get the maxium of it (forEach)

const maximum = (...nums) =>{
    let max=0;
    nums.forEach((num)=>{
        if(num>max)
            {
                max=num;
            }
    });
    return max;
}

console.log(maximum(10,20,50,80,30));
