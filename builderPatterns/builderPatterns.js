//builder pattern
// builder pattern is a creational design pattern that allows for the step-by-step construction of complex objects.
// It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
//e.g

// class Address {
//   constructor(zip, street) {
//     this.zip = zip;
//     this.street = street;
//   }
// }
// class User {
//   constructor(name, age, phone, address) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.address = address;
//   }
// }

// const user = new User(
//   "Ajay",
//   undefined,
//   undefined,
//   new Address("12345", "Main St")
// );
// console.log(user);

// traditinal way to build a builder

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  setAge(age) {
    this.user.age = age;
    return this;
  }
  setPhone(phone) {
    this.user.phone  = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }
  build() {
    return this.user;
  }
}
// let user = new UserBuilder("Ajay").build()
let user = new UserBuilder("Ajay").setAge(30).build()

console.log("user****",user)
