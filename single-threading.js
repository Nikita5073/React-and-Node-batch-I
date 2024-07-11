// JavaScript is considered as Single Threaded application
// becuase it has single call stack matlab ek bar mai ek hi piece of code run kar sakta hai.

// Event loop :
// non blocking operation, code rukta nahi hai jab function call hota hai
// when asynchronous operation is initiated JavaScript can continues excuting other codes while waiting for the asynchronous code to complete


// callback queues
// jab asynchronous operation complete ho jata hai it is placed in the callback queue, event loop bar bar check kar karta hai ki call stack empty hai ya nahi hai,


// promises or async await
// built on the top of promises allows asynchronous programming.

// web apis
// http req, dom events

// data fecthing using async function
const getdata = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      datas = await response.json();
      // console.log(datas);
      const addressdata = datas.reduce((newaddarr, data) => {
        return [...newaddarr, data.username, data.phone];
      }, []);
      console.log(addressdata);
    } catch (error) {
      console.log(error);
    }
  };
  const main = async () => {
    console.log("abc");
    await getdata();
    console.log("def");
    console.log("def2");
    console.log("def3");
  };
  
  main();
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");