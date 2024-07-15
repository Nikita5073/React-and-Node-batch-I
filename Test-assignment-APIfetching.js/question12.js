//Data fetch hone ke baad, users ka array mein se un users ko remove karo jo city "Kulas Light" mein rehte hain using filter and splice methods.

const list = async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        data.filter((singledata)=>{
            if(singledata.address.street == "Kulas Light")
            {
                // console.log(singledata);
            }
        })
        const ans =data.splice(0,1);
        console.log(data);

    }
    catch(error){
        console.log(error);
    }
}

list();