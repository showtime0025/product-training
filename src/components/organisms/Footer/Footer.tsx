import React from 'react';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import styles from './Footer.module.css';

export interface FooterProps {
  companyName?: string;
  copyrightYear?: number;
  links?: Array<{
    title: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  }>;
  socialLinks?: Array<{
    name: string;
    href: string;
    icon: string;
  }>;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  companyName = 'Product Training',
  copyrightYear = new Date().getFullYear(),
  links = [],
  socialLinks = [],
  className,
}) => {
  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.content}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <Text variant="h4" weight="bold" className={styles.companyName}>
              {companyName}
            </Text>
            <Text variant="body" color="secondary" className={styles.description}>
              Empowering teams with comprehensive product training and knowledge management.
            </Text>
            {socialLinks.length > 0 && (
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size="md" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Links Sections */}
          {links.length > 0 && (
            <div className={styles.links}>
              {links.map((section, sectionIndex) => (
                <div key={sectionIndex} className={styles.linkSection}>
                  <Text variant="h6" weight="semibold" className={styles.linkSectionTitle}>
                    {section.title}
                  </Text>
                  <ul className={styles.linkList}>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href={item.href} className={styles.link}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <Text variant="caption" color="muted">
            © {copyrightYear} {companyName}. All rights reserved.
          </Text>
          <div className={styles.bottomLinks}>
            <a href="/privacy" className={styles.bottomLink}>
              Privacy Policy
            </a>
            <a href="/terms" className={styles.bottomLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
