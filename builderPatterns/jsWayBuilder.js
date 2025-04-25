class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone='12345', address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", {
  age: 10,
  // phone: "01234567890",  
  address: new Address("12345", "Main St"),
});
console.log(user);
