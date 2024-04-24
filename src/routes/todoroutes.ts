import * as express from "express";
import { createTodo, getTodos, getTodoById, updateTodo, deleteTodo } from "../controllers/todoController";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodoById); // Neu hinzugefügt
router.put("/:id", updateTodo); // Neu hinzugefügt
router.delete("/:id", deleteTodo); // Neu hinzugefügt

export default router;
