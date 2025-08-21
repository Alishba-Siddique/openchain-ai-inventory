import { InventoryItem } from "../models/inventory.model.mjs";
import { AppError } from "../../errors/app-error.mjs";
export class InventoryService {
    async addItem(name, quantity, price) {
        if (!name || quantity == null || price == null) {
            throw new AppError("INVALID_INPUT", "Name, quantity, and price are required", 400);
        }
        return InventoryItem.create({ name, quantity, price });
    }
    async listItems() {
        return InventoryItem.find();
    }
}
//# sourceMappingURL=inventory.service.mjs.map