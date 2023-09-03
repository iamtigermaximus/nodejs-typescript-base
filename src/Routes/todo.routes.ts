// src/routes/todo.routes.ts

import { Router } from 'express';
import {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} from '../Controllers/todo.controller';

const router: Router = Router();

router.post('/todos', createTodo);
router.get('/todos', getTodos);
router.get('/todos/:id', getTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;
