import { FormControl, FormErrorMessage, FormLabel, Input, type InputProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export interface FormInputProps extends InputProps {
  label?: string;
  error?: string;
}

export const FormInput = forwardRef(function FormInput({ label, error, ...props }: FormInputProps, ref) {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <Input ref={ref} {...props} />
      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
});
