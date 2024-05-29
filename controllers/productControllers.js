const Product = require("../models/productModel");
// 1. Creating User Function
 
const createProduct = async (req, res) => {
  console.log(req.body);
 
//   //#. Destructuring
//   const { Name, description, price, category, image } = req.body;
//   //2. Validation
//   //2.1 If not : Send the reponse and stop the process
 
//   if (!Name || !description || !price || !category || image) {
//     return res.json({
//       success: false,
//       message: "Please enter all fields!",
//     });
//   }
 
//   // Try - Catch (Error Handling)
//   try {
//     //4. Check existing product
//     //check if the user is already exists
//     const existingProduct = await productModels.findOne({ Name: Name });
 
//     //4.1 if yes : Send response and stop the process
//     if (existingProduct) {
//       return res.json({
//         success: false,
//         message: "Product already exists!",
//       });
//     }
//     //5. if not:
//   } catch (error) {
//     console.log(error);
//     res.json({
//       success: false,
//       message: "Internal Server Error!",
//     });
//   }
 
//   //If proper data
//   const newProduct = new productModels({
//     //fields : valuse reciveced from user
//     productName: Name,
//     productdescription: description,
//     productprice: price,
//     productcategory: category,
//     image: image,
//   });
 
//   //6. Save in the database
//   await newProduct.save();
 
//   //7. Send a success reponse
//   res.json({
//     success: true,
//     message: "Product Created successfully!",
//   });
};
 
//exporting
module.exports = {
  createProduct,
};
 
