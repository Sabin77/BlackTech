const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Supplier = require("../models/Supplier");
const adminMiddleware = require("../middleware/adminMiddleware");
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

//ROUTE: 1  // Add a supplier using: POST "/api/suppliers/addsupplier". Login required
router.post(
  "/addsupplier",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  upload.single("companylogo"),
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isLength({ min: 5 }),
    body("phone", "Enter a valid phone").isLength({ min: 10 }),
    body("address", "Enter a valid address").isLength({ min: 3 }),
    body("companyname", "Enter a valid company name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const { name, email, phone, address, companyname, role } = req.body;

      //If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Access the uploaded file (logo)
      const logo = req.file;

      const supplier = new Supplier({
        name,
        email,
        phone,
        address,
        companyname,
        role,
        companylogo: logo ? logo.path : null,
        user: req.user.id,
      });

      const savedSupplier = await supplier.save();
      res.json(savedSupplier);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE: 2 // Fetch all suppliers using: GET "/api/suppliers/getallsuppliers". Login required
router.get(
  "/getallsuppliers",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      const suppliers = await Supplier.find({ user: req.user.id });
      res.json(suppliers);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE: 3 // Update an existing Note using: PUT "/api/suppliers/updatesupplier"

router.put(
  "/updatesupplier/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  upload.single("companylogo"),

  async (req, res) => {
    const { name, email, phone, address, companyname } = req.body;

    const companylogo = req.file ? req.file.path : undefined;

    // Create a newSupplier object
    const newSupplier = {};

    if (name) {
      newSupplier.name = name;
    }
    if (email) {
      newSupplier.email = email;
    }
    if (phone) {
      newSupplier.phone = phone;
    }
    if (address) {
      newSupplier.address = address;
    }
    if (companyname) {
      newSupplier.companyname = companyname;
    }
    if (companylogo) {
      newSupplier.companylogo = companylogo;
    }

    try {
      // Find the supplier to be updated and update it
      let supplier = await Supplier.findById(req.params.id); // Await the find operation

      if (!supplier) {
        return res.status(404).send("Supplier not found");
      }

      supplier = await Supplier.findByIdAndUpdate(
        req.params.id,
        { $set: newSupplier },
        { new: true }
      );

      res.json({ supplier });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get(
  "/getsupplierdetails/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,

  async (req, res) => {
    try {
      let supplier = await Supplier.findById(req.params.id);
      res.json(supplier);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.delete(
  "/deletesupplier/:id",
  fetchuser,
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      // Find the supplier to be deleted and delete it
      let supplier = await Supplier.findById(req.params.id); // Await the find operation

      if (!supplier) {
        return res.status(404).send("Supplier not found");
      }

      supplier = await Supplier.findByIdAndDelete(req.params.id);

      res.json({ message: "Supplier deleted successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Get the name and Id of the supplier only
router.get("/getallnames", async (req, res) => {
  try {
    const suppliers = await Supplier.find({}, "_id name companylogo");
    res.json(suppliers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
