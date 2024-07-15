//Data fetch hone ke baad, users ka ek naya array banao jo pehle 5 users ko contain karta ho using slice method.

const getdata = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const slicedata = data.slice(0,5)
        console.log(slicedata);
    }
    catch(error) {
        console.log(error);
    }
};
getdata();