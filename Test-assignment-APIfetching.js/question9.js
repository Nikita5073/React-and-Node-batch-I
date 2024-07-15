//Data fetch hone ke baad, users ka name ka ek naya array banao using reduce method.

const getdata = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const info = data.reduce((acc,element)=>{
            return [...acc,element.name]
        },[])
        console.log(info);
    }
    catch(error){
        console.log(error);
    }
}

getdata();