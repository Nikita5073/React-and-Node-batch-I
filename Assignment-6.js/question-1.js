//1. Create a user-defined callback function that sorts an array of book prices in ascending or descending order based on the callback provided. The master function should take an array and a callback function as arguments.
function ascendingsort(bookPrices)
{
    for(let i = 0;i<bookPrices.length;i++)
    {
        for(let j = 0;j<bookPrices.length-1-i;j++)
        {
            if(bookPrices[j]>bookPrices[j+1])
            {
                t = bookPrices[j]
                bookPrices[j] = bookPrices[j+1]
                bookPrices[j+1] = t
            }
        }
    }
    return bookPrices;
}

function descendingsort(bookPrices)
{
    for(let i = 0;i<bookPrices.length;i++)
    {
        for(let j = 0;j<bookPrices.length-1-i;j++)
        {
            if(bookPrices[j]<bookPrices[j+1])
            {
                t = bookPrices[j]
                bookPrices[j] = bookPrices[j+1]
                bookPrices[j+1] = t
            }
        }
    }
    return bookPrices;
}



const sorting = (bookPrices,callbackfunction) =>{
    return callbackfunction(bookPrices)
}

let bookPrices = [500,300,200,800,400];

console.log(sorting(bookPrices,ascendingsort));
console.log(sorting(bookPrices,descendingsort));
