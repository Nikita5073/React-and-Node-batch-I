//3. data fetch hone ke badd har odd field of information ka new array create karna hai.

const getdata = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const datas = await response.json();
        const newdata = datas.reduce((data,element,index) =>{
            if (index % 2 !=0){
                data.push(element);
            }
            return data;
        }, []);
        console.log(newdata);
    }
    catch (error) {
        console.log(error);
      }
};
getdata();