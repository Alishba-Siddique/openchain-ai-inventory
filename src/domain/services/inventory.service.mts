 import { InventoryItem } from "../models/inventory.model.mjs";
import { AppError } from "../../errors/app-error.mjs";

export class InventoryService {
  async addItem(name: string, quantity: number, price: number) {
    if (!name || quantity == null || price == null) {
      throw new AppError("INVALID_INPUT", "Name, quantity, and price are required", 400);
    }
    return InventoryItem.create({ name, quantity, price });
  }

  async listItems() {
    return InventoryItem.find();
  }
}
