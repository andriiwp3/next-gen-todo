import { ArrowUpIcon, ArrowDownIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';
import { Card, CardBody, CardFooter, Center, Heading, Stack, Text } from '@chakra-ui/react';
import { TODO_PRIORITY, TodoItem } from '@/app/todos/types';

const PRIORITY_ICONS = Object.freeze({
  [TODO_PRIORITY.LOW]: ArrowDownIcon,
  [TODO_PRIORITY.MEDIUM]: MinusIcon,
  [TODO_PRIORITY.HIGH]: ArrowUpIcon,
});

interface TodoCardBaseProps extends Omit<TodoItem, 'id'> {
  showToolbar?: boolean;
}

interface TodoCardWithToolbar extends TodoCardBaseProps {
  showToolbar: true;
  removeCard: () => void;
}

interface TodoCardWithoutToolbar extends TodoCardBaseProps {
  showToolbar?: false;
  removeCard?: never;
}

export type TodoCardProps = TodoCardWithToolbar | TodoCardWithoutToolbar;

export function TodoCard({ title, description = '', priority, showToolbar = false, removeCard }: TodoCardProps) {
  const PriorityIcon = PRIORITY_ICONS[priority || TODO_PRIORITY.MEDIUM];

  return (
    <Card variant="outline" bg="none">
      <Center background="whiteAlpha.300" borderRadius="50%" w={6} height={6} position="absolute" right={2} top={2}>
        <PriorityIcon />
      </Center>
      <CardBody pr={8}>
        <Stack spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color="whiteAlpha.500">{description}</Text>
        </Stack>
      </CardBody>
      {showToolbar && (
        <CardFooter justifyContent="flex-end">
          <DeleteIcon cursor="pointer" onClick={removeCard} />
        </CardFooter>
      )}
    </Card>
  );
}
