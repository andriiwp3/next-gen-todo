import { Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { useRouter, usePathname } from 'next/navigation';

import { User } from '@/app/auth/types';
import { Logo } from '@/components/logo';
import { ROUTES } from '@/constants/routes';

export interface HeaderProps {
  user?: User | null;
  logout: () => void;
}

export function Header({ user, logout }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isLoggedIn = !!user;

  const onAuthButtonClick = () => {
    if (isLoggedIn) logout();

    return router.push(ROUTES.LOGIN);
  };

  return (
    <Flex as="header" p={4} shadow="md" bg="brand.500" color="white">
      <Logo />
      <Spacer />
      <Flex align="center" gap={4}>
        <Text display={{ base: 'none', sm: 'inline-block' }}>{user?.email}</Text>
        {!pathname.startsWith('/auth') && (
          <Button onClick={onAuthButtonClick}>{isLoggedIn ? 'Logout' : 'Login'}</Button>
        )}
      </Flex>
    </Flex>
  );
}
