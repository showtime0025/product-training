import React, { useState } from 'react';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';
import { SearchBox } from '../../molecules/SearchBox';
import styles from './Header.module.css';

export interface HeaderProps {
  logo?: React.ReactNode;
  title?: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  navigationItems?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  userMenu?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  title = 'Product Training',
  showSearch = true,
  onSearch,
  navigationItems = [],
  userMenu,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${className || ''}`}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <div className={styles.brand}>
          {logo || (
            <Text variant="h3" weight="bold" className={styles.title}>
              {title}
            </Text>
          )}
        </div>

        {/* Desktop Navigation */}
        {navigationItems.length > 0 && (
          <nav className={styles.navigation}>
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`${styles.navLink} ${item.active ? styles.active : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* Search */}
        {showSearch && (
          <div className={styles.search}>
            <SearchBox
              placeholder="Search products..."
              onSearch={onSearch}
              className={styles.searchBox}
            />
          </div>
        )}

        {/* User Menu */}
        <div className={styles.userMenu}>
          {userMenu || (
            <Button variant="ghost" size="md">
              <Icon name="user" size="md" />
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="md"
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
        >
          <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size="md" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navigationItems.length > 0 && (
            <nav className={styles.mobileNavigation}>
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${item.active ? styles.active : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      )}
    </header>
  );
};
