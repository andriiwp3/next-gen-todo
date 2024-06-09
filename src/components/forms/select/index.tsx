import { FormControl, FormErrorMessage, FormLabel, Select, type SelectProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export interface FormSelectProps extends SelectProps {
  label?: string;
  error?: string;
  options: Array<{ id: number | string; label: string; value: string }>;
}

export const FormSelect = forwardRef(function FormSelect({ label, error, options, ...props }: FormSelectProps, ref) {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <Select ref={ref} {...props}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
});
