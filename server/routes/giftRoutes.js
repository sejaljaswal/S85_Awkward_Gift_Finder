const express = require("express");
const router = express.Router();
const { Gift } = require("../model/giftSchema"); // Ensure your model is correctly named and located

// Fetch all gifts (READ)
router.get("/gifts", async (req, res) => {
    try {
        const gifts = await Gift.find();
        res.json(gifts);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Fetch a single gift by ID (READ)
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

// Add a new gift (CREATE)
router.post("/gifts", async (req, res) => {
    try {
        console.log("Received POST request with body:", req.body); // Log request body
        const { name, price, category, description } = req.body;

        if (!name || !price || !category) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newGift = new Gift({ name, price, category, description });
        await newGift.save();
        
        res.status(201).json({ message: "Gift added successfully", newGift });
    } catch (error) {
        console.error("❌ Error adding gift:", error); // Log actual error
        res.status(400).json({ message: "Error adding gift", error: error.message });
    }
});


// Update a gift by ID (UPDATE)
router.put("/gifts/:id", async (req, res) => {
    try {
        const updatedGift = await Gift.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGift) {
            return res.status(404).json({ message: "Gift not found" });
        }
        res.json({ message: "Gift updated successfully", updatedGift });
    } catch (error) {
        res.status(400).json({ message: "Error updating gift", error });
    }
});

// Delete a gift by ID (DELETE)
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
