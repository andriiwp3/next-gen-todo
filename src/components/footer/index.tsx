import { Flex, Spacer, Text } from '@chakra-ui/react';

import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <Flex as="footer" p={4} shadow="md" bg="brand.500" color="white">
      <Logo />
      <Spacer />
      <Text>© 2024 Andrii Herchykov</Text>
    </Flex>
  );
}
