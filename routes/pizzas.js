import express from "express";
import {
  createPizza,
  getAllPizzas,
  getPizzaById,
  updatePizza,
  deletePizza
} from "../controllers/pizzaController.js";

const router = express.Router();

router.post("/", createPizza);
router.get("/", getAllPizzas);
router.get("/:id", getPizzaById);
router.put("/:id", updatePizza);
router.delete("/:id", deletePizza);

export default router;