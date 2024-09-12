const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Product = require("../models/Product");
const adminMiddleware = require("../middleware/adminMiddleware");
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

//ROUTE: 1  // Add a product using: POST "/api/product/addproduct". Login required
router.post(
  "/addproduct",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  upload.single("productImage"),
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 5 }),
    body("quantity_limit", "Enter a valid quantity limit").isInt({ min: 1 }),
    body("color", "Colors should be an array").custom((value, { req }) => {
      // Parse color as JSON if it's a string
      if (typeof value === "string") {
        try {
          JSON.parse(value);
        } catch (e) {
          throw new Error("Colors should be an array");
        }
      }
      return true;
    }),
  ],
  async (req, res) => {
    try {
      // Parse the color field if it is a stringified JSON array
      if (typeof req.body.color === "string") {
        req.body.color = JSON.parse(req.body.color);
      }

      const { name, description, quantity_limit, color, supplier } = req.body;

      //If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Access the uploaded file (product_image)
      const product_image = req.file;
      

      const product = new Product({
        name,
        description,
        quantity_limit,
        color,
        supplier,
        productImage: product_image ? product_image.path : null,
        user: req.user.id,
      });

      const savedProduct = await product.save();
      res.json(savedProduct);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE: 2 // Fetch all products using: GET "/api/products/getallproducts". Login required
router.get(
  "/getallproducts",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      const products = await Product.find({ user: req.user.id });
      res.json(products);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE: 3 // Update an existing Note using: PUT "/api/products/updateproduct"

router.put(
  "/updateproduct/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  upload.single("productImage"),

  async (req, res) => {
    const { name, description, quantity_limit, color, supplier } = req.body;

    const productImage = req.file ? req.file.path : undefined;

    // Create a newProduct object
    const newProduct = {};

    if (name) {
      newProduct.name = name;
    }
    if (description) {
      newProduct.description = description;
    }
    if (quantity_limit) {
      newProduct.quantity_limit = quantity_limit;
    }
    if (color) {
      newProduct.color = color;
    }
    if (productImage) {
      newProduct.productImage = productImage;
    }
    if (supplier) {
      newProduct.supplier = supplier;
    }

    try {
      // Find the product to be updated and update it
      let product = await Product.findById(req.params.id); // Await the find operation

      if (!product) {
        return res.status(404).send("Product not found");
      }

      product = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: newProduct },
        { new: true }
      );

      res.json({ product });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get(
  "/getproductdetails/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      let product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.delete(
  "/deleteproduct/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      // Find the product to be deleted and delete it
      let product = await Product.findById(req.params.id); // Await the find operation

      if (!product) {
        return res.status(404).send("Product not found");
      }

      product = await Product.findByIdAndDelete(req.params.id);

      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Get the name and Id of the product only
router.get("/getallnames", async (req, res) => {
  try {
    const products = await Product.find({}, "_id name productImage ");
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
