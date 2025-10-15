import React from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export interface ButtonProps extends ChakraButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  // Map our custom variants to Chakra variants
  const chakraVariant = variant === 'primary' ? 'solid' : variant;
  const chakraColorScheme = variant === 'primary' ? 'blue' : variant === 'secondary' ? 'gray' : undefined;

  return (
    <ChakraButton
      variant={chakraVariant}
      size={size}
      colorScheme={chakraColorScheme}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
