import { Link } from '@chakra-ui/next-js';
import { Heading } from '@chakra-ui/react';
import { GeistMono } from 'geist/font/mono';

import { ROUTES } from '@/constants/routes';

export function Logo() {
  return (
    <Link href={ROUTES.TODO_LIST}>
      <Heading size="md" fontFamily={GeistMono.style.fontFamily}>
        {'<TODO>'}
      </Heading>
    </Link>
  );
}
