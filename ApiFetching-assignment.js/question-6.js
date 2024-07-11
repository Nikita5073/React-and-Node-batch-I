//6.data mai se se sirf 2-3 field of information ko leke ek array mai add karna hai.

const getdata = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const newdata = data.reduce((array,element) =>{
            return [...array, element.name, element.username, element.email];
        }, []);
        console.log(newdata);
    }
    catch (error) {
        console.log(error);
      }
};
getdata();