//create an object of user as created in mongodb and you have to pass that object in function and print all its values without destructing it.
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
function UserDetails(user)
{
  console.log(user.id);
  console.log(user.username);
  console.log(user.useremail);
  console.log(user.password);
  console.log(user.firstName);
  console.log(user.lastName);
  console.log(user.role);
  console.log(user.gender);
  console.log(user.age);
  console.log(user.city);
  console.log(user.salary);
  console.log(user.skills);
}

UserDetails(user);