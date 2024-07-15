//Data fetch hone ke baad, users ka ek naya array banao jo unke address ko full address string mein convert karta ho using map method.

const list = async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        data.map((singledata)=>{
           const {street,suite,city,zipcode,geo{lat,lng}} = singledata;
           return street,suite,city,zipcode,geo{lat,lng}
        })

    }
    catch(error){
        console.log(error);
    }
}

list();