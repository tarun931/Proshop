import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10), //Bcrypt use krke encrypt krna h
    //hashSync will hash the password synchronously
    //10 as argument is the rounds ....it is bydefault 10
    isAdmin: true,
  },
  {
    name: "Vedant Pandey",
    email: "vedant@example.com",
    password: bcrypt.hashSync("123456", 10), //Bcrypt use krke encrypt krna h
    isAdmin: false,
  },
  {
    name: "Tushar Baliyan",
    email: "tushar@example.com",
    password: bcrypt.hashSync("123456", 10), //Bcrypt use krke encrypt krna h
    //isAdmin add nhi kiya kyonki by default false h
    isAdmin: false,
  },
];

export default users;
