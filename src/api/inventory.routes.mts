 import express from "express";
import { addItem, listItems } from "./inventory.controller.mjs";

const router = express.Router();

router.post("/items", addItem);
router.get("/items", listItems);

export default router;
