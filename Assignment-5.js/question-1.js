//1.  Create a user-defined callback function that sorts an array of numbers in ascending or descending order based on the callback provided. The master function should take an array and a callback function as arguments.  

function ascendingsort(arr)
{
    for(let i = 0;i<arr.length;i++)
    {
        for(let j = 0;j<arr.length-1-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                t = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = t
            }
        }
    }
    return arr;
}

const solution = (arr,callbackfunction) =>{
    return callbackfunction(arr)
}
let arr = [3,8,6,1,5,7]

console.log(solution(arr,ascendingsort));