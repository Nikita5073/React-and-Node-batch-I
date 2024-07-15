//Data fetch hone ke baad, users ka ek naya array banao jo users ke email contain karta ho jin ka address.zipcode "92998-3874" hai using filter and map methods.

const getdata = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        const emaildata = data.map((element)=>{
            const {email} = element;
            return (email);
        })
        console.log(emaildata);

        const zip = data.filter((item)=>{
            if(item.address.zipcode == "92998-3874")
            {
                return item;            }
        })
        console.log(zip);
    }
    catch(error){
        console.log(error);
    }
}

getdata();