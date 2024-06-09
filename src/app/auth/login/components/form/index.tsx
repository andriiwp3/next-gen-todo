import { Button, Spinner, VStack } from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { LoginFormData } from '@/app/auth/types';
import { FormInput } from '@/components/forms/input';

export interface LoginFormProps {
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
  isDirty: boolean;
  isValid: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
}

export function LoginForm({ register, errors, isDirty, isValid, isSubmitting, onSubmit }: LoginFormProps) {
  const isSubmitButtonDisabled = !isDirty || !isValid || isSubmitting;

  return (
    <VStack as="form" onSubmit={onSubmit} gap={5} w="100%">
      <FormInput
        {...register('email')}
        id="email"
        type="text"
        name="email"
        autoComplete="off"
        label="Email"
        placeholder="Type in your email"
        error={errors?.email?.message?.toString()}
      />
      <FormInput
        {...register('password')}
        id="password"
        type="text"
        name="password"
        autoComplete="off"
        label="Password"
        placeholder="Type in your password"
        error={errors?.password?.message?.toString()}
      />
      <Button
        type="submit"
        w="100%"
        size="md"
        isDisabled={isSubmitButtonDisabled}
        {...(isSubmitting && { leftIcon: <Spinner /> })}
      >
        Login
      </Button>
    </VStack>
  );
}
