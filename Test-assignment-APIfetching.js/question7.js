//Data fetch hone ke baad, aakhri user ka website extract karo using object destructuring.

function websiteData(data,length)
{
    const {website} = data[length-1];
    console.log(website);
}

const list = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const length = (data.length);

        websiteData(data,length);
    }
    catch(error){
        console.log(error);
    }
}

list();