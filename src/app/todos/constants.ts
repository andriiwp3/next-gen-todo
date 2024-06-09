import { TODO_PRIORITY } from '@/app/todos/types';
import { FormSelectProps } from '@/components/forms/select';

export const TODO_PRIORITIES_LIST: FormSelectProps['options'] = [
  { id: 1, label: 'Low', value: TODO_PRIORITY.LOW },
  { id: 2, label: 'Medium', value: TODO_PRIORITY.MEDIUM },
  { id: 3, label: 'High', value: TODO_PRIORITY.HIGH },
];
