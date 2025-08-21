import mongoose from "mongoose";
const InventorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 }
}, { timestamps: true });
export const InventoryItem = mongoose.model("InventoryItem", InventorySchema);
//# sourceMappingURL=inventory.model.mjs.map