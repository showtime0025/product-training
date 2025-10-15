import React from 'react';
import styles from './Icon.module.css';

export interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning';
  className?: string;
}

// Simple SVG icon component - in a real app, you'd use a proper icon library
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'primary',
  className,
  ...props
}) => {
  const iconClasses = [
    styles.icon,
    styles[size],
    styles[color],
    className
  ].filter(Boolean).join(' ');

  // Simple icon mapping - replace with your preferred icon library
  const getIconPath = (iconName: string) => {
    const icons: Record<string, string> = {
      search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      menu: 'M4 6h16M4 12h16M4 18h16',
      close: 'M6 18L18 6M6 6l12 12',
      arrow: 'M9 5l7 7-7 7',
      plus: 'M12 4v16m8-8H4',
      minus: 'M20 12H4',
      check: 'M5 13l4 4L19 7',
      edit: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7',
      delete: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
    };
    return icons[iconName] || icons['star']; // fallback to star icon
  };

  return (
    <svg
      className={iconClasses}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={getIconPath(name)}
      />
    </svg>
  );
};
