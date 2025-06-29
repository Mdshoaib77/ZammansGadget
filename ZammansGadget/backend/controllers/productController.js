// // // import { v2 as cloudinary } from "cloudinary"; 
// // // import productModel from "../models/productModel.js";

// // // // Add Product
// // // const addProduct = async (req, res) => {
// // //   try {
// // //     const { name, description, price, category, subCategory, sizes, bestseller, soldOut, colors } = req.body;

// // //     // safe access to req.files with optional chaining
// // //     const image1 = req.files?.image1?.[0];
// // //     const image2 = req.files?.image2?.[0];
// // //     const image3 = req.files?.image3?.[0];
// // //     const image4 = req.files?.image4?.[0];

// // //     const images = [image1, image2, image3, image4].filter(Boolean);

// // //     const imagesUrl = await Promise.all(
// // //       images.map(async (item) => {
// // //         const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
// // //         return result.secure_url;
// // //       })
// // //     );

// // //     let sizesParsed = [];
// // //     let colorsParsed = [];

// // //     try {
// // //       sizesParsed = sizes ? JSON.parse(sizes) : [];
// // //     } catch {
// // //       sizesParsed = [];
// // //     }

// // //     try {
// // //       colorsParsed = colors ? JSON.parse(colors) : [];
// // //     } catch {
// // //       colorsParsed = [];
// // //     }

// // //     const productData = {
// // //       name,
// // //       description,
// // //       category,
// // //       price: Number(price),
// // //       subCategory,
// // //       bestseller: bestseller === "true",
// // //       soldOut: soldOut === "true",
// // //       sizes: sizesParsed,
// // //       colors: colorsParsed,
// // //       image: imagesUrl,
// // //       date: Date.now()
// // //     };

// // //     const product = new productModel(productData);
// // //     await product.save();

// // //     res.json({ success: true, message: "Product Added" });
// // //   } catch (error) {
// // //     console.log(error);
// // //     res.json({ success: false, message: error.message });
// // //   }
// // // };

// // // // List, remove, singleProduct unchanged

// // // const listProducts = async (req, res) => {
// // //   try {
// // //     const products = await productModel.find({});
// // //     res.json({ success: true, products });
// // //   } catch (error) {
// // //     console.log(error);
// // //     res.json({ success: false, message: error.message });
// // //   }
// // // };

// // // const removeProduct = async (req, res) => {
// // //   try {
// // //     await productModel.findByIdAndDelete(req.body.id);
// // //     res.json({ success: true, message: "Product Removed" });
// // //   } catch (error) {
// // //     console.log(error);
// // //     res.json({ success: false, message: error.message });
// // //   }
// // // };

// // // const singleProduct = async (req, res) => {
// // //   try {
// // //     const { productId } = req.body;
// // //     const product = await productModel.findById(productId);
// // //     res.json({ success: true, product });
// // //   } catch (error) {
// // //     console.log(error);
// // //     res.json({ success: false, message: error.message });
// // //   }
// // // };

// // // export { listProducts, addProduct, removeProduct, singleProduct };





// // import { v2 as cloudinary } from "cloudinary"; 
// // import productModel from "../models/productModel.js";

// // // Add Product
// // const addProduct = async (req, res) => {
// //   try {
// //     const { name, description, price, category, sizes, bestseller, soldOut, colors } = req.body;

// //     // safe access to req.files with optional chaining
// //     const image1 = req.files?.image1?.[0];
// //     const image2 = req.files?.image2?.[0];
// //     const image3 = req.files?.image3?.[0];
// //     const image4 = req.files?.image4?.[0];

// //     const images = [image1, image2, image3, image4].filter(Boolean);

// //     const imagesUrl = await Promise.all(
// //       images.map(async (item) => {
// //         const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
// //         return result.secure_url;
// //       })
// //     );

// //     let sizesParsed = [];
// //     let colorsParsed = [];

// //     try {
// //       sizesParsed = sizes ? JSON.parse(sizes) : [];
// //     } catch {
// //       sizesParsed = [];
// //     }

// //     try {
// //       colorsParsed = colors ? JSON.parse(colors) : [];
// //     } catch {
// //       colorsParsed = [];
// //     }

// //     const productData = {
// //       name,
// //       description,
// //       category,        // subCategory removed here
// //       price: Number(price),
// //       bestseller: bestseller === "true",
// //       soldOut: soldOut === "true",
// //       sizes: sizesParsed,
// //       colors: colorsParsed,
// //       image: imagesUrl,
// //       date: Date.now()
// //     };

// //     const product = new productModel(productData);
// //     await product.save();

// //     res.json({ success: true, message: "Product Added" });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // // List Products
// // const listProducts = async (req, res) => {
// //   try {
// //     const products = await productModel.find({});
// //     res.json({ success: true, products });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // // Remove Product
// // const removeProduct = async (req, res) => {
// //   try {
// //     await productModel.findByIdAndDelete(req.body.id);
// //     res.json({ success: true, message: "Product Removed" });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // // Get Single Product
// // const singleProduct = async (req, res) => {
// //   try {
// //     const { productId } = req.body;
// //     const product = await productModel.findById(productId);
// //     res.json({ success: true, product });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // export { listProducts, addProduct, removeProduct, singleProduct };










// // // Import statements
// // // import { v2 as cloudinary } from "cloudinary"; 
// // // import productModel from "../models/productModel.js";

// // // Function declarations

// // // const addProduct = async (req, res) => {
// // //   // your addProduct logic here
// // // };

// // // // Other existing functions
// // // const listProducts = async (req, res) => { /* ... */ };
// // // const removeProduct = async (req, res) => { /* ... */ };
// // // const singleProduct = async (req, res) => { /* ... */ };

// // // // New functions for categories and filtering
// // // const getCategories = async (req, res) => { /* ... */ };
// // // const getProductsByCategory = async (req, res) => { /* ... */ };
// // // const getFeaturedProducts = async (req, res) => { /* ... */ };

// // // // Export all functions at the end
// // // export {
// // //   addProduct,
// // //   listProducts,
// // //   removeProduct,
// // //   singleProduct,
// // //   getCategories,
// // //   getProductsByCategory,
// // //   getFeaturedProducts
// // // };


// import { v2 as cloudinary } from "cloudinary"; 
// import productModel from "../models/productModel.js";

// // Fixed 11 categories (hardcoded)
// const fixedCategories = [
//   "Official Phones",
//   "Unofficial Phones",
//   "Used Phones",
//   "Adapter and Power cable",
//   "PowerBank",
//   "Airpods",
//   "Earphones",
//   "Neckband",
//   "Gamming Accesorices",
//   "Speakers",
//   "Cover and glass"
// ];

// // Add Product (subCategory removed)
// const addProduct = async (req, res) => {
//   try {
//     const { name, description, price, category, sizes, bestseller, soldOut, colors } = req.body;

//     // safe access to req.files with optional chaining
//     const image1 = req.files?.image1?.[0];
//     const image2 = req.files?.image2?.[0];
//     const image3 = req.files?.image3?.[0];
//     const image4 = req.files?.image4?.[0];

//     const images = [image1, image2, image3, image4].filter(Boolean);

//     const imagesUrl = await Promise.all(
//       images.map(async (item) => {
//         const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
//         return result.secure_url;
//       })
//     );

//     let sizesParsed = [];
//     let colorsParsed = [];

//     try { sizesParsed = sizes ? JSON.parse(sizes) : []; } catch { sizesParsed = []; }
//     try { colorsParsed = colors ? JSON.parse(colors) : []; } catch { colorsParsed = []; }

//     const productData = {
//       name,
//       description,
//       category,
//       price: Number(price),
//       bestseller: bestseller === "true",
//       soldOut: soldOut === "true",
//       sizes: sizesParsed,
//       colors: colorsParsed,
//       image: imagesUrl,
//       date: Date.now()
//     };

//     const product = new productModel(productData);
//     await product.save();

//     res.json({ success: true, message: "Product Added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // List all products
// const listProducts = async (req, res) => {
//   try {
//     const products = await productModel.find({});
//     res.json({ success: true, products });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Remove product by ID
// const removeProduct = async (req, res) => {
//   try {
//     await productModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "Product Removed" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Get single product by ID
// const singleProduct = async (req, res) => {
//   try {
//     const { productId } = req.body;
//     const product = await productModel.findById(productId);
//     res.json({ success: true, product });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Get fixed categories list
// const getCategories = async (req, res) => {
//   try {
//     res.json(fixedCategories);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get products filtered by category
// const getProductsByCategory = async (req, res) => {
//   try {
//     const category = req.query.category;
//     if (!category) {
//       return res.status(400).json({ message: "Category query param required" });
//     }

//     const products = await productModel.find({ category });
//     res.json(products);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get featured (bestseller) products
// const getFeaturedProducts = async (req, res) => {
//   try {
//     const products = await productModel.find({ bestseller: true });
//     res.json(products);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// };

// export {
//   addProduct,
//   listProducts,
//   removeProduct,
//   singleProduct,
//   getCategories,
//   getProductsByCategory,
//   getFeaturedProducts
// };


import { v2 as cloudinary } from "cloudinary"; 
import productModel from "../models/productModel.js";

// Fixed 11 categories (hardcoded)
const fixedCategories = [
  "Official Phones",
  "Unofficial Phones",
  "Used Phones",
  "Adapter and Power cable",
  "PowerBank",
  "Airpods",
  "Earphones",
  "Neckband",
  "Gamming Accesorices",
  "Speakers",
  "Cover and glass"
];

// Add Product (subCategory removed)
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, sizes, bestseller, soldOut, colors } = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    let sizesParsed = [];
    let colorsParsed = [];

    try { sizesParsed = sizes ? JSON.parse(sizes) : []; } catch { sizesParsed = []; }
    try { colorsParsed = colors ? JSON.parse(colors) : []; } catch { colorsParsed = []; }

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      bestseller: bestseller === "true",
      soldOut: soldOut === "true",
      sizes: sizesParsed,
      colors: colorsParsed,
      image: imagesUrl,
      date: Date.now()
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// List all products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Remove product by ID
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get single product by ID
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get fixed categories list
const getCategories = async (req, res) => {
  try {
    res.json({ success: true, categories: fixedCategories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get products filtered by category
const getProductsByCategory = async (req, res) => {
  try {
    const category = req.query.category;
    if (!category) {
      return res.status(400).json({ success: false, message: "Category query param required" });
    }

    const products = await productModel.find({ category });
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get featured (bestseller) products
const getFeaturedProducts = async (req, res) => {
  try {
    const products = await productModel.find({ bestseller: true });
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
  getCategories,
  getProductsByCategory,
  getFeaturedProducts
};
