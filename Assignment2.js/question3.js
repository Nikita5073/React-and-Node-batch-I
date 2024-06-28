//3.you have to use the mongodb user dataset to pass object in function now from that function you have to pass the skills key pass as object to another function print all its skills.using foreach method

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
  function function2(skills)
  {
    skills.forEach(element => {
      console.log(element);
    });
  }

  function print({skills})
  {
    function2(skills);
  }

  print(user);
  