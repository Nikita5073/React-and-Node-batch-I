//Data fetch hone ke baad, pehle user ka name extract karo using object destructuring.

function nameData(data)
{

    data.forEach(element => {
       const {name} = element;
       console.log(name);
    });
}

const getdata = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        nameData(data);
    }
    catch(error){
        console.log(error);
    }
}
getdata();