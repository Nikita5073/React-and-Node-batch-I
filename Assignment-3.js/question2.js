//2.using rest operator function concept pass n no of arguments and get the minimum of it (reduce)

const minimum = (...nums) =>{
    return nums.reduce((mini,num) => (num<mini ? num:mini),1000);
}
console.log(minimum(30,60,20,50,10));