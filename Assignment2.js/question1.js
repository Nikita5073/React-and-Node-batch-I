//1. create an object of user as created in mongodb and you have to pass that object in function and print all its values by destructing it.
const user = 
{
  "id": "2",
  "username": "Shakshi Karamchandani",
  "useremail": "shakshi.karamchandani@yahoo.com",
  "password": "shakshi123",
  "firstName": "shakshi",
  "lastName": "karamchandani",
  "role": "customer",
  "gender": "Female",
  "age": 32,
  "city": "New Delhi",
  "salary": 500000,
  "skills": ["Python", "C++", "Java", "Os"]
};

function UserDetails({id,username,useremail,password,firstName,lastName,role,gender,age,city,salary,skills})
{
  console.log(`ID: ${id}`);
  console.log(`Username: ${username}`);
  console.log(`Useremail: ${useremail}`);
  console.log(`Password: ${password}`);
  console.log(`Firstname: ${firstName}`);
  console.log(`Lastname: ${lastName}`);
  console.log(`Role: ${role}`);
  console.log(`Gender: ${gender}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);
  console.log(`Salary: ${salary}`);
  console.log(`Skills: ${skills}`);
}

UserDetails(user);
