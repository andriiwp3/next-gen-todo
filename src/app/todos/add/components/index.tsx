import { AddIcon } from '@chakra-ui/icons';
import { Button, Spinner, VStack } from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { TODO_PRIORITIES_LIST } from '@/app/todos/constants';
import { AddTodoFormData } from '@/app/todos/types';
import { FormInput } from '@/components/forms/input';
import { FormSelect } from '@/components/forms/select';

export interface AddTodoFormProps {
  register: UseFormRegister<AddTodoFormData>;
  errors: FieldErrors<AddTodoFormData>;
  isDirty: boolean;
  isValid: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
}

export function AddTodoForm({ register, errors, isDirty, isValid, isSubmitting, onSubmit }: AddTodoFormProps) {
  const isSubmitButtonDisabled = !isDirty || !isValid || isSubmitting;

  return (
    <VStack as="form" onSubmit={onSubmit} gap={5}>
      <FormInput
        {...register('title')}
        id="title"
        type="text"
        name="title"
        autoComplete="off"
        label="<TODO> Title"
        placeholder="TODO: Fill in the title"
        error={errors?.title?.message?.toString()}
      />
      <FormInput
        {...register('description')}
        id="description"
        type="text"
        name="description"
        autoComplete="off"
        label="<TODO> Description"
        placeholder="TODO: Fill in the Description"
        error={errors?.description?.message?.toString()}
      />
      <FormSelect
        {...register('priority')}
        id="priority"
        name="priority"
        autoComplete="off"
        label="<TODO> Priority"
        options={TODO_PRIORITIES_LIST}
        error={errors?.priority?.message?.toString()}
      />
      <Button
        type="submit"
        w="100%"
        size="md"
        leftIcon={isSubmitting ? <Spinner /> : <AddIcon />}
        isDisabled={isSubmitButtonDisabled}
      >
        Add
      </Button>
    </VStack>
  );
}
