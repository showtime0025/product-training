import React from 'react';
import { Icon as ChakraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react';
import {
  SearchIcon,
  EmailIcon,
  PhoneIcon,
  StarIcon,
  AddIcon,
  MinusIcon,
  CheckIcon,
  EditIcon,
  DeleteIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
  ArrowForwardIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons';

export interface IconProps extends ChakraIconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning';
}

// Map our custom icon names to Chakra UI icons
const iconMap: Record<string, React.ComponentType<any>> = {
  search: SearchIcon,
  user: EmailIcon, // Using EmailIcon as placeholder for user
  email: EmailIcon,
  phone: PhoneIcon,
  heart: StarIcon, // Using StarIcon as placeholder for heart
  star: StarIcon,
  home: ArrowBackIcon, // Using ArrowBackIcon as placeholder for home
  menu: HamburgerIcon,
  close: CloseIcon,
  arrow: ArrowForwardIcon,
  plus: AddIcon,
  minus: MinusIcon,
  check: CheckIcon,
  edit: EditIcon,
  delete: DeleteIcon,
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'primary',
  ...props
}) => {
  // Map our custom colors to Chakra colors
  const chakraColor = color === 'primary' ? 'gray.800' : 
                     color === 'secondary' ? 'gray.600' : 
                     color === 'muted' ? 'gray.400' : 
                     color === 'error' ? 'red.500' : 
                     color === 'success' ? 'green.500' : 
                     color === 'warning' ? 'yellow.500' : color;

  // Map our custom sizes to Chakra sizes
  const chakraSize = size === 'sm' ? '12px' : 
                    size === 'md' ? '16px' : 
                    size === 'lg' ? '20px' : 
                    size === 'xl' ? '24px' : size;

  const IconComponent = iconMap[name] || StarIcon; // fallback to StarIcon

  return (
    <ChakraIcon
      as={IconComponent}
      boxSize={chakraSize}
      color={chakraColor}
      {...props}
    />
  );
};
