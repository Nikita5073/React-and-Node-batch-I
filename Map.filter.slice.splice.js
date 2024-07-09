function number(...nums) {
    // nums.forEach((n,index) =>{
    //     nums[index]=n*2;
    //     console.log(n);
    // });
    // console.log(nums);

    // for(const n of nums)
    // {
    //     console.log(n);
    // }

    // for(const n in nums)
    // {
    //     console.log(`${n}: ${nums[n*2]}`);
    // }

    //map function

    // const double = nums.map((num) => num * 2);
    //    console.log(double);
    //    console.log(nums);

    // const even = nums.filter((num) => num%2==0);
    // console.log(nums);
    // console.log(even);

    // const slicenum = nums.slice(1,3);
    // console.log(slicenum);
    // console.log(nums);

    const splicenum = nums.splice(1,3);
    console.log(splicenum);
    console.log(nums);


}

number(2,3,4,5,6,7,8,9);