let person = {

    name : "aniket",
    age : 21,
    mob : 8888555558,
    address : {
      city : "amravati",
      street : "akoli",
      pin : 444607
    }
  };
  
  console.log(typeof person);
  
  const keys = Object.keys(person);
  
  console.log(keys)
  
  const value = Object.values(person);
  
  console.log(value)
  
  console.log(person.address.city);
  console.log(person.name);
  console.log(person['age']);