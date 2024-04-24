// src/controllers/todoController.ts
import { Request, Response } from "express";
import { Todo, TodoStatus } from "../models/todoModel";

const todos: Todo[] = [];

export const createTodo = (req: Request, res: Response): void => {
  // Implementierung der Erstellung eines neuen Todos
};

export const getTodos = (req: Request, res: Response): void => {
  // Implementierung des Abrufs aller Todos
};

export const getTodoById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
  } else {
    res.json(todo);
  }
};

export const updateTodo = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { todo, deadline, assignee, owner, status } = req.body;
  const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex === -1) {
    res.status(404).json({ message: "Todo not found" });
  } else {
    todos[todoIndex] = { ...todos[todoIndex], todo, deadline, assignee, owner, status };
    res.json(todos[todoIndex]);
  }
};

export const deleteTodo = (req: Request, res: Response): void => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex === -1) {
    res.status(404).json({ message: "Todo not found" });
  } else {
    todos.splice(todoIndex, 1);
    res.status(204).end();
  }
};
