import { z } from 'zod';
import { addTodoSchema } from './schemas';

export enum TODO_PRIORITY {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export type AddTodoFormData = z.infer<typeof addTodoSchema>;

export interface TodoItem extends AddTodoFormData {
  id: string;
}
