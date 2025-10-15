import React from 'react';
import { Text as ChakraText, Heading, TextProps as ChakraTextProps, HeadingProps } from '@chakra-ui/react';

export interface TextProps extends ChakraTextProps {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'body' | 'caption' | 'overline' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as,
  variant = 'body',
  color = 'primary',
  weight = 'normal',
  align = 'left',
  children,
  ...props
}) => {
  // Map our custom colors to Chakra colors
  const chakraColor = color === 'primary' ? 'gray.800' : 
                     color === 'secondary' ? 'gray.600' : 
                     color === 'muted' ? 'gray.400' : 
                     color === 'error' ? 'red.500' : 
                     color === 'success' ? 'green.500' : 
                     color === 'warning' ? 'yellow.500' : color;

  // Map our custom weights to Chakra weights
  const chakraWeight = weight === 'normal' ? 'normal' : 
                      weight === 'medium' ? 'medium' : 
                      weight === 'semibold' ? 'semibold' : 
                      weight === 'bold' ? 'bold' : weight;

  // Map our custom variants to Chakra sizes
  const chakraSize = variant === 'body' ? 'md' : 
                    variant === 'caption' ? 'sm' : 
                    variant === 'overline' ? 'xs' : undefined;

  // If it's a heading variant, use Heading component
  if (variant.startsWith('h')) {
    const headingSize = variant as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    return (
      <Heading
        as={as || headingSize}
        size={headingSize}
        color={chakraColor}
        fontWeight={chakraWeight}
        textAlign={align}
        {...props}
      >
        {children}
      </Heading>
    );
  }

  // For text variants, use Text component
  return (
    <ChakraText
      as={as || 'p'}
      fontSize={chakraSize}
      color={chakraColor}
      fontWeight={chakraWeight}
      textAlign={align}
      {...props}
    >
      {children}
    </ChakraText>
  );
};
