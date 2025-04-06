const express = require("express");
const router = express.Router();
const { Gift } = require("../model/giftSchema");
const { body, validationResult } = require("express-validator");

// Get all gifts
router.get("/gifts", async (req, res) => {
  try {
    const gifts = await Gift.find();
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get gift by ID
router.get("/gifts/:id", async (req, res) => {
  try {
    const gift = await Gift.findById(req.params.id);
    if (!gift) {
      return res.status(404).json({ message: "Gift not found" });
    }
    res.json(gift);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Create gift with validation
router.post(
  "/gifts",
  [
    body("name").notEmpty().withMessage("Gift name is required"),
    body("price").isFloat({ gt: 0 }).withMessage("Price must be greater than 0"),
    body("category").notEmpty().withMessage("Category is required"),
    body("description")
      .isLength({ min: 10 })
      .withMessage("Description must be at least 10 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, price, category, description } = req.body;
      const newGift = new Gift({ name, price, category, description });
      await newGift.save();
      res.status(201).json({ message: "Gift added successfully", newGift });
    } catch (error) {
      res.status(400).json({ message: "Error adding gift", error: error.message });
    }
  }
);

// Update gift with optional validation
router.put(
  "/gifts/:id",
  [
    body("name").optional().notEmpty().withMessage("Name can't be empty"),
    body("price")
      .optional()
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
    body("category").optional().notEmpty().withMessage("Category can't be empty"),
    body("description")
      .optional()
      .isLength({ min: 10 })
      .withMessage("Description must be at least 10 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const updatedGift = await Gift.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedGift) {
        return res.status(404).json({ message: "Gift not found" });
      }
      res.json({ message: "Gift updated successfully", updatedGift });
    } catch (error) {
      res.status(400).json({ message: "Error updating gift", error });
    }
  }
);

// Delete gift
router.delete("/gifts/:id", async (req, res) => {
  try {
    const deletedGift = await Gift.findByIdAndDelete(req.params.id);
    if (!deletedGift) {
      return res.status(404).json({ message: "Gift not found" });
    }
    res.json({ message: "Gift deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting gift", error });
  }
});

module.exports = router;
