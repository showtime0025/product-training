import React from 'react';
import { Input } from '../../atoms/Input';
import { Text } from '../../atoms/Text';
import styles from './FormField.module.css';

export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  required = false,
  disabled = false,
  error,
  helperText,
  onChange,
  onBlur,
  onFocus,
  className,
}) => {
  return (
    <div className={`${styles.formField} ${className || ''}`}>
      <div className={styles.labelWrapper}>
        <Text variant="caption" weight="medium" className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </Text>
      </div>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        error={error}
        helperText={helperText}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};
