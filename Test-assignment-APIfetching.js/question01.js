//Data fetch hone ke baad, users ka ek naya array banao jo city "South Christy" mein rehte hain using filter method.

const getdata = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const cityarray = data.filter((singledata)=>{
            if(singledata.address.city == "South Christy")
            {
                return(singledata);
            }
        })
        console.log(cityarray);
    }
    catch(error) {
        console.log(error);
    }
};
getdata();