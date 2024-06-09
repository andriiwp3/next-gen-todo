'use client';
import { Grid, Heading } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useId } from 'react';
import { useForm } from 'react-hook-form';

import { AddTodoForm } from '@/app/todos/add/components';
import { addTodoDefaultValues } from '@/app/todos/add/constants';
import { TodoCard } from '@/app/todos/components/todo-card';
import { addTodoSchema } from '@/app/todos/schemas';
import { AddTodoFormData } from '@/app/todos/types';
import { ROUTES } from '@/constants/routes';
import { useTodoStore } from '@/stores/todo-store';

export default function TodoItemPage() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<AddTodoFormData>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: addTodoDefaultValues,
  });
  const id = useId();
  const router = useRouter();
  const { addTodo } = useTodoStore();

  const onSubmit = async (data: AddTodoFormData) => {
    addTodo({ id, ...data });
    router.push(ROUTES.TODO_LIST);
  };

  return (
    <Grid
      w="100%"
      templateColumns={{ base: 'none', md: '300px 1fr' }}
      templateRows={{ base: 'auto 1fr', md: 'none' }}
      gap={{ base: 12, md: 20 }}
    >
      <Grid templateRows="auto 1fr">
        <Heading>Preview</Heading>
        <TodoCard {...watch()} />
      </Grid>
      <AddTodoForm
        register={register}
        errors={errors}
        isDirty={isDirty}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Grid>
  );
}
