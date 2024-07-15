//Data fetch hone ke baad, users ka website ka ek naya array banao using map method.

const list = async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        const websitearr = data.map((singledata)=>{
            const {website} = singledata;
            return website;
        })
        console.log(websitearr);
    }
    catch(error){
        console.log(error);
    }
}

list();