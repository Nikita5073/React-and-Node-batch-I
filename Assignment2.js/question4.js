//4. you have to use the mongodb user dataset to pass object in function now from that function you have to pass the skills key pass as object to another function print all its skills using this method.
// hint:
// const skills = ["java", "cpp", "python"];
// const [a, b, c] = skills;
// console.log(a);
// console.log(b);
// console.log(c);

const user = {
    "id": "5",
    "username": "Ananya Singh",
    "useremail": "ananya.singh@yahoo.com",
    "password": "Ananya123",
    "firstName": "Ananya",
    "lastName": "Singh",
    "role": "customer",
    "gender": "Female",
    "age": 28,
    "city": "Goa",
    "salary": 600000,
    "skills": ["Python", "C++", "HTML", "CSS"]
  };
  
  
  
  function print(skills) {
    
    const [a, b, c, d] = skills;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  }
  function printUserSkills(user) {
    const { skills } = user;
    print(skills);
  }
  

  printUserSkills(user);
  