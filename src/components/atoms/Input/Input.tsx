import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  id,
  size = 'md',
  className,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const inputClasses = [
    styles.input,
    styles[`input--${size}`],
    error && styles['input--error'],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.formControl}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={inputClasses}
        {...props}
      />
      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}
      {helperText && !error && (
        <div className={styles.helperText}>
          {helperText}
        </div>
      )}
    </div>
  );
};
