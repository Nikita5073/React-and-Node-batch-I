//Data fetch hone ke baad, users ka ek naya array banao jinka company name "Romaguera-Crona" hai using filter method.

const getdata = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const companyName = data.filter((singledata)=>{
            if(singledata.company.name == "Romaguera-Crona")
            {
                return(singledata);
            }
        })
        console.log(companyName);
    }
    catch(error) {
        console.log(error);
    }
};
getdata();