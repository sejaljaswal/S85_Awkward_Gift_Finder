const mongoose = require("mongoose");

const giftSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String }
});

const Gift = mongoose.model("Gift", giftSchema);

module.exports = { Gift };
