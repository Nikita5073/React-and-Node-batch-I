//Data fetch hone ke baad, users ka array se 3 users ko remove karo starting from index 2 using splice method.

const getdata = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const splicedata = data.splice(2,3)
        console.log(splicedata);
    }
    catch(error) {
        console.log(error);
    }
};
getdata();