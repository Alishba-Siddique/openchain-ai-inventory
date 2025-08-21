import { InventoryService } from "../domain/services/inventory.service.mjs";
const inventoryService = new InventoryService();
export const addItem = async (req, res, next) => {
    try {
        const { name, quantity, price } = req.body;
        const item = await inventoryService.addItem(name, quantity, price);
        res.status(201).json({ data: item });
    }
    catch (err) {
        next(err);
    }
};
export const listItems = async (_req, res, next) => {
    try {
        const items = await inventoryService.listItems();
        res.json({ data: items });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=inventory.controller.mjs.map