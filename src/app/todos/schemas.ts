import { z } from 'zod';
import { TODO_PRIORITY } from './types';

export const addTodoSchema = z.object({
  title: z.string().min(2),
  description: z.string().optional(),
  priority: z.nativeEnum(TODO_PRIORITY),
});
