//2. data fetch hone ke badd sirf ek field of information ka new array create karna hai.

const getdata = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const newdata = data.reduce((array,element) =>{
            return [...array, element.name];
        }, []);
        console.log(newdata);
    }
    catch (error) {
        console.log(error);
      }
};
getdata();