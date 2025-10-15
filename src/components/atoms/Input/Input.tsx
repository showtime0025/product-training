import React from 'react';
import { Input as ChakraInput, FormControl, FormLabel, FormErrorMessage, FormHelperText, InputProps as ChakraInputProps } from '@chakra-ui/react';

export interface InputProps extends ChakraInputProps {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={inputId}>{label}</FormLabel>}
      <ChakraInput
        id={inputId}
        {...props}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      {helperText && !error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
