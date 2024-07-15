//Data fetch hone ke baad, pehle user ka email extract karo using object destructuring.

function emailData(data)
{
    const {email} = data[0];
    console.log(email);
}


const getdata = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        emailData(data);
    }
    catch(error){
        console.log(error);
    }
}
getdata();