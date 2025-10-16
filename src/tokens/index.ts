/**
 * Design Tokens Barrel Export
 * 
 * This file exports all design token related functionality for easy importing
 * throughout the application.
 */

// Import tokens first to avoid circular dependency
import { tokens } from './tokens';

export { tokens, getCSSVarName, createCSSVars } from './tokens';
export type {
  ColorScale,
  SpacingKey,
  FontSizeKey,
  FontWeightKey,
  BorderRadiusKey,
  BoxShadowKey,
  ZIndexKey,
  BreakpointKey,
} from './tokens';

export type {
  ColorPalette,
  ColorSystem,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
  Typography,
  Spacing,
  BorderRadius,
  BoxShadow,
  ZIndex,
  Breakpoints,
  TransitionDuration,
  TransitionEasing,
  Transition,
  ComponentTokens,
  DesignTokens,
  ButtonSize,
  ButtonVariant,
  InputSize,
  CSSVarName,
  CSSVarValue,
  TokenPath,
  GetNestedValue,
} from './types';

// Re-export commonly used token values for convenience
export const colors = {
  primary: tokens.colors.primary,
  secondary: tokens.colors.secondary,
  success: tokens.colors.success,
  warning: tokens.colors.warning,
  error: tokens.colors.error,
  neutral: tokens.colors.neutral,
  background: tokens.colors.background,
  foreground: tokens.colors.foreground,
} as const;

export const spacing = tokens.spacing;
export const typography = tokens.typography;
export const borderRadius = tokens.borderRadius;
export const boxShadow = tokens.shadows;
export const zIndex = tokens.zIndex;
export const breakpoints = tokens.breakpoints;
export const transition = tokens.transitions;

// Utility functions for common token operations
export const getColor = (palette: keyof typeof colors, scale: ColorScale): string => {
  return colors[palette][scale];
};

export const getSpacing = (size: SpacingKey): string => {
  return spacing[size];
};

export const getFontSize = (size: FontSizeKey): string => {
  return typography.fontSizes[size];
};

export const getBorderRadius = (size: BorderRadiusKey): string => {
  return borderRadius[size];
};

export const getShadow = (size: BoxShadowKey): string => {
  return boxShadow[size];
};

export const getZIndex = (level: ZIndexKey): string | number => {
  return zIndex[level];
};

// Media query helpers
export const getBreakpoint = (size: BreakpointKey): string => {
  return breakpoints[size];
};

export const mediaQuery = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
} as const;

// Theme helpers
export const getThemeValue = (path: TokenPath): string => {
  const keys = path.split('.');
  let value: any = tokens;
  
  for (const key of keys) {
    value = value[key];
  }
  
  return String(value);
};

// CSS custom property helpers
export const getCSSVar = (path: TokenPath): string => {
  return `var(--${path.replace(/\./g, '-')})`;
};

// Component size helpers
export const getButtonHeight = (size: ButtonSize): string => {
  return tokens.components.button.height[size];
};

export const getButtonPadding = (size: ButtonSize): string => {
  return tokens.components.button.padding[size];
};

export const getInputHeight = (size: InputSize): string => {
  return tokens.components.input.height[size];
};

export const getInputPadding = (size: InputSize): string => {
  return tokens.components.input.padding[size];
};
