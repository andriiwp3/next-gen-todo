import { create } from 'zustand';

import { TodoItem } from '@/app/todos/types';

interface TodoState {
  todos: TodoItem[];
  addTodo: (todo: TodoItem) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));
