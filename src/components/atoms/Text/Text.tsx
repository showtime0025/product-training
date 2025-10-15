import React from 'react';
import styles from './Text.module.css';

export interface TextProps {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'body' | 'caption' | 'overline' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  as,
  variant = 'body',
  color = 'primary',
  weight = 'normal',
  align = 'left',
  children,
  className,
  ...props
}) => {
  const Component = as || (variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p');
  
  const textClasses = [
    styles.text,
    styles[variant],
    styles[color],
    styles[weight],
    styles[align],
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  );
};
