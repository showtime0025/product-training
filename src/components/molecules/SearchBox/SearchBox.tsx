import React, { useState } from 'react';
import { Input } from '../../atoms/Input';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';
import styles from './SearchBox.module.css';

export interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  defaultValue?: string;
  showClearButton?: boolean;
  className?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'Search...',
  onSearch,
  onClear,
  defaultValue = '',
  showClearButton = true,
  className,
}) => {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  const handleClear = () => {
    setQuery('');
    onClear?.();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.searchBox} ${className || ''}`}>
      <div className={styles.inputWrapper}>
        <Icon name="search" size="sm" color="muted" className={styles.searchIcon} />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          className={styles.input}
        />
        {showClearButton && query && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className={styles.clearButton}
          >
            <Icon name="close" size="sm" />
          </Button>
        )}
      </div>
      <Button type="submit" variant="primary" size="md">
        Search
      </Button>
    </form>
  );
};
