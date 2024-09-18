const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const StockIn = require("../models/StockIn");
const adminMiddleware = require("../middleware/adminMiddleware");
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const StockOut = require("../models/StockOut");

//ROUTE: 1  // Add a stock using: POST "/api/stock/addstock". Login required
router.post(
  "/addstockin",
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
        supplierId,
        supplierName,
        quantity_in,
        availableQuantity,
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
        supplierId,
        supplierName,
        quantity_in,
        availableQuantity,
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
  "/deletestockin/:id",
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

// ROUTE:  // Fetch stock-in history for a specific product using: GET "/api/stock/getstockinhistory/:productId". Login required
router.get(
  "/getstockinhistory/:productId",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      const { productId } = req.params;

      // Find all stock-in entries for the given productId
      const stockInHistory = await StockIn.find({ productId });

      if (!stockInHistory || stockInHistory.length === 0) {
        return res
          .status(404)
          .json({ message: "No stock-in history found for this product." });
      }

      res.json(stockInHistory);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.put(
  "/updatestockinhistory/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    const { supplierName, quantity_in, price } = req.body;

    // Create a newStock object
    const newStock = {};

    if (supplierName) {
      newStock.supplierName = supplierName;
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

// Stock Out
router.post(
  "/addstockout",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      const {
        batch_id,
        productId,
        productName,
        productImage,
        supplierId,
        supplierName,
        availableQuantity,
        quantity_out,
        price,
        buyerName,
        buyerPhone,
      } = req.body;

      //If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // Find the corresponding stock-in entry by batch_id and productId
      const stockIn = await StockIn.findOne({ batch_id, productId });

      if (!stockIn) {
        return res.status(404).json({ error: "Stock-in entry not found." });
      }

      // Check if the available quantity is sufficient for the stock-out
      if (stockIn.availableQuantity < quantity_out) {
        return res.status(400).json({ error: "Insufficient stock available." });
      }

      // Deduct the quantity_out from the quantityAvailable
      stockIn.availableQuantity -= quantity_out;
      (availableQuantity = stockIn.availableQuantity),
        // Save the updated stock-in entry
        await stockIn.save();

      const stockOut = new StockOut({
        batch_id,
        productId,
        productName,
        productImage,
        supplierId,
        supplierName,
        availableQuantity,
        quantity_out,

        price,
        buyerName,
        buyerPhone,
        user: req.user.id,
      });

      const savedStockOut = await stockOut.save();
      res.json(savedStockOut);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get(
  "/getallstockout",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      const stocks = await StockOut.find();
      res.json(stocks);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE: 3 // Update an existing Note using: PUT "/api/products/updateproduct"

router.put(
  "/updatestockout/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    const { product, supplier, quantity_out, price } = req.body;

    // Create a newStock object
    const newStock = {};

    if (product) {
      newStock.product = product;
    }
    if (supplier) {
      newStock.supplier = supplier;
    }
    if (quantity_in) {
      newStock.quantity_out = quantity_out;
    }
    if (price) {
      newStock.price = price;
    }

    try {
      // Find the stock to be updated and update it
      let stock = await StockOut.findById(req.params.id); // Await the find operation

      if (!stock) {
        return res.status(404).send("Stock not found");
      }

      stock = await StockOut.findByIdAndUpdate(
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
  "/getstockoutdetails/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      let stock = await StockOut.findById(req.params.id);
      res.json(stock);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.delete(
  "/deletestockout/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      // Find the stock to be deleted and delete it
      let stock = await StockOut.findById(req.params.id); // Await the find operation

      if (!stock) {
        return res.status(404).send("Stock not found");
      }

      stock = await StockOut.findByIdAndDelete(req.params.id);

      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE:  // Fetch stock-in history for a specific product using: GET "/api/stock/getstockinhistory/:productId". Login required
router.get(
  "/getstockouthistory/:productId",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      const { productId } = req.params;

      // Find all stock-in entries for the given productId
      const stockOutHistory = await StockOut.find({ productId });

      if (!stockOutHistory || stockOutHistory.length === 0) {
        return res
          .status(404)
          .json({ message: "No stock-in history found for this product." });
      }

      res.json(stockOutHistory);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.put(
  "/updatestockouthistory/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    const {
      batch_id,
      productId,
      availableQuantity,
      quantity_out,
      price,
      buyerName,
      buyerPhone,
    } = req.body;

    // Create a newStock object
    const newStock = {};

    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Find the corresponding stock-in entry by batch_id and productId
    const stockIn = await StockIn.findOne({ batch_id, productId });

    if (!stockIn) {
      return res.status(404).json({ error: "Stock-in entry not found." });
    }

    stockIn.availableQuantity = availableQuantity;

    // Save the updated stock-in entry
    await stockIn.save();

    if (availableQuantity) {
      newStock.availableQuantity = availableQuantity;
    }
    if (quantity_out) {
      newStock.quantity_out = quantity_out;
    }
    if (price) {
      newStock.price = price;
    }
    if (buyerName) {
      newStock.buyerName = buyerName;
    }
    if (buyerPhone) {
      newStock.buyerPhone = buyerPhone;
    }

    try {
      // Find the stock to be updated and update it
      let stock = await StockOut.findById(req.params.id); // Await the find operation

      if (!stock) {
        return res.status(404).send("Stock not found");
      }

      stock = await StockOut.findByIdAndUpdate(
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
  "/getstockquantities",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      // Fetch stock-in data with quantity and date
      const stockInData = await StockIn.find({}, "quantity_in date").lean();
      // Fetch stock-out data with quantity and date
      const stockOutData = await StockOut.find({}, "quantity_out date").lean();

      res.json({
        stockIn: stockInData,
        stockOut: stockOutData,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
