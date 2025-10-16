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
  // Map our custom colors to CSS classes
  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'muted':
        return styles.muted;
      case 'error':
        return styles.error;
      case 'success':
        return styles.success;
      case 'warning':
        return styles.warning;
      default:
        return styles.primary;
    }
  };

  // Map our custom weights to CSS classes
  const getWeightClass = () => {
    switch (weight) {
      case 'normal':
        return styles.normal;
      case 'medium':
        return styles.medium;
      case 'semibold':
        return styles.semibold;
      case 'bold':
        return styles.bold;
      default:
        return styles.normal;
    }
  };

  // Map our custom variants to CSS classes
  const getVariantClass = () => {
    switch (variant) {
      case 'body':
        return styles.body;
      case 'caption':
        return styles.caption;
      case 'overline':
        return styles.overline;
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'h4':
        return styles.h4;
      case 'h5':
        return styles.h5;
      case 'h6':
        return styles.h6;
      default:
        return styles.body;
    }
  };

  // Map our custom alignments to CSS classes
  const getAlignClass = () => {
    switch (align) {
      case 'left':
        return styles.left;
      case 'center':
        return styles.center;
      case 'right':
        return styles.right;
      default:
        return styles.left;
    }
  };

  // Determine the HTML element to use
  const Element = as || (variant.startsWith('h') ? variant : 'p');

  // Build the class name
  const classNames = [
    styles.text,
    getVariantClass(),
    getColorClass(),
    getWeightClass(),
    getAlignClass(),
    className
  ].filter(Boolean).join(' ');

  return (
    <Element
      className={classNames}
      {...props}
    >
      {children}
    </Element>
  );
};
