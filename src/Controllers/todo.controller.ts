// src/controllers/todo.controller.ts

import { Request, Response } from 'express';
import Todo, { ITodo } from '../Models/todo.model';

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todo: ITodo = new Todo(req.body);
    const savedTodo: ITodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo: ITodo | null = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedTodo) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(
      req.params.id
    );
    if (!deletedTodo) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
