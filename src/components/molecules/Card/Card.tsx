import React from 'react';
import { Text } from '../../atoms/Text';
import styles from './Card.module.css';

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  variant = 'default',
  padding = 'md',
  className,
  onClick,
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    onClick && styles.clickable,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && (
            <Text variant="h4" weight="semibold" className={styles.title}>
              {title}
            </Text>
          )}
          {subtitle && (
            <Text variant="caption" color="secondary" className={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
