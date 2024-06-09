import { AddTodoFormData, TODO_PRIORITY } from '@/app/todos/types';

export const addTodoDefaultValues: AddTodoFormData = Object.freeze({
  title: '',
  description: '',
  priority: TODO_PRIORITY.MEDIUM,
});
