//Make a function(Logic)

const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");

//1. Creating user function
const createUser = async (req, res) => {
  //1.Get data from the user(Fname, lname,email,pp)
  console.log(req.body);
  //#.Destructuring
  const { firstName, lastName, email, password } = req.body;
  //2.Valideation
  if (!firstName || !lastName || !email || !password) {
    return res.json({
      sucess: false,
      massage: "Please enter all fields!",
    });
  }
  //Try - Cath (Error handling)
  try {
    //check if the user is already exist
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.json({
        sucess: false,
        message: "User Already Exists!",
      });
    }
    const randomSalt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password,randomSalt);

    //Save the user in database
    const newUser = new userModel({
      //Fields: Values recevied from user
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hasedPassword,
    });
    //Actuwally save the user in database
    await newUser.save();
    //send the sucess resopnd
    res.json({
      sucess: true,
      message: "user created sucessfully!",
    });
  } catch (error) {
    console.log(error);
    res.jeson({
      sucess: false,
      message: "Server error!",
    });
  }
};

//exporting
module.exports = {
  createUser,
};

//Task
//Controller-Routes-indexedDB.js
//(Make a productController.js)
//(Make a productRoutes.js)
//(Link to index.js)
//http://localhost:5000/api/product/create
//response:Product API is working....! 