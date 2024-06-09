'use client';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Flex, Input, VStack } from '@chakra-ui/react';
import { useState, type FormEvent } from 'react';

import { TodoList } from '@/app/todos/components/todo-list';
import { ROUTES } from '@/constants/routes';
import { useTodoStore } from '@/stores/todo-store';

export default function TodoItemsPage() {
  const [search, setSearch] = useState('');
  const todos = useTodoStore((state) => state.todos.filter((todo) => todo.title.includes(search)));

  const handleSearch = (event: FormEvent<HTMLInputElement>) => setSearch(event.currentTarget.value);

  return (
    <VStack gap={10}>
      <Flex w="100%" gap={10}>
        <Input placeholder="Type your search" variant="filled" value={search} onInput={handleSearch} />
        <Link href={ROUTES.ADD_TODO} variant="ghost-button">
          <AddIcon />
          Add
        </Link>
      </Flex>
      <TodoList todos={todos} />
    </VStack>
  );
}
