'use client';
import { Flex, Heading } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { LoginForm } from '@/app/auth/login/components/form';
import { loginSchema } from '@/app/auth/schemas';
import { LoginFormData } from '@/app/auth/types';
import { ROUTES } from '@/constants/routes';
import { useAuthStore } from '@/stores/auth-store';

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const { login } = useAuthStore();

  const onSubmit = async (data: LoginFormData) => {
    const { password, ...user } = data;
    login(user);
    Cookies.set('token', 'mock-token');
    router.push(ROUTES.TODO_LIST);
  };

  return (
    <Flex w="100%" maxW={350} direction="column" mx="auto" gap={8}>
      <Heading>Welcome!</Heading>

      <LoginForm
        register={register}
        errors={errors}
        isDirty={isDirty}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Flex>
  );
}
