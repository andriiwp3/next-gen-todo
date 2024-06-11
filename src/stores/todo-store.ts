import { create } from 'zustand';

import { TodoItem } from '@/app/todos/types';

interface TodoState {
  todos: TodoItem[];
  addTodo: (todo: TodoItem) => void;
  removeTodo: (todo: string) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
