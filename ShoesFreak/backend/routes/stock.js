const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const StockIn = require("../models/StockIn");
const adminMiddleware = require("../middleware/adminMiddleware");
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

//ROUTE: 1  // Add a stock using: POST "/api/stock/addstock". Login required
router.post(
  "/addstock",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  [
    body("batch_id", "Enter an Id for batch").isLength({ min: 3 }),
    body("quantity_in", "Enter a valid quantity ").isInt({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const {
        batch_id,
        productId,
        productName,
        productImage,
        supplier,
        quantity_in,
        price,
      } = req.body;

      //If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const stockIn = new StockIn({
        batch_id,
        productId,
        productName,
        productImage,
        supplier,
        quantity_in,
        price,
        user: req.user.id,
      });

      const savedStockIn = await stockIn.save();
      res.json(savedStockIn);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE: 2 // Fetch all products using: GET "/api/products/getallproducts". Login required
router.get(
  "/getallstockin",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      const stocks = await StockIn.find();
      res.json(stocks);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE: 3 // Update an existing Note using: PUT "/api/products/updateproduct"

router.put(
  "/updatestockin/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    const { batch_id, product, supplier, quantity_in, price } = req.body;

    // Create a newStock object
    const newStock = {};

    if (product) {
      newStock.product = product;
    }
    if (supplier) {
      newStock.supplier = supplier;
    }
    if (quantity_in) {
      newStock.quantity_in = quantity_in;
    }
    if (price) {
      newStock.price = price;
    }

    try {
      // Find the stock to be updated and update it
      let stock = await StockIn.findById(req.params.id); // Await the find operation

      if (!stock) {
        return res.status(404).send("Stock not found");
      }

      stock = await StockIn.findByIdAndUpdate(
        req.params.id,
        { $set: newStock },
        { new: true }
      );

      res.json({ stock });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get(
  "/getstockindetails/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      let stock = await StockIn.findById(req.params.id);
      res.json(stock);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.delete(
  "/deletestock/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      // Find the stock to be deleted and delete it
      let stock = await StockIn.findById(req.params.id); // Await the find operation

      if (!stock) {
        return res.status(404).send("Stock not found");
      }

      stock = await StockIn.findByIdAndDelete(req.params.id);

      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
