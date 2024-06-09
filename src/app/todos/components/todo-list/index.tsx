import { Grid } from '@chakra-ui/react';
import { TodoCard } from '@/app/todos/components/todo-card';
import { TodoItem } from '@/app/todos/types';

export interface TodoListProps {
  todos: TodoItem[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <Grid
      w="100%"
      templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
      gap={6}
    >
      {todos.map((todo) => (
        <TodoCard key={todo.id} title={todo.title} description={todo.description} priority={todo.priority} />
      ))}
    </Grid>
  );
}
