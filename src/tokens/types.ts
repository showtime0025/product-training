/**
 * Design Token Types
 * 
 * TypeScript type definitions for design tokens to ensure type safety
 * and better developer experience when using tokens in components.
 */

export type ColorScale = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

export type ColorPalette = {
  [K in ColorScale]: string;
};

export type ColorSystem = {
  primary: ColorPalette;
  secondary: ColorPalette;
  success: ColorPalette;
  warning: ColorPalette;
  error: ColorPalette;
  neutral: ColorPalette;
  background: {
    light: string;
    dark: string;
  };
  foreground: {
    light: string;
    dark: string;
  };
};

export type FontFamily = {
  sans: string[];
  mono: string[];
};

export type FontSize = {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
  '8xl': string;
  '9xl': string;
};

export type FontWeight = {
  thin: string;
  extralight: string;
  light: string;
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
  black: string;
};

export type LineHeight = {
  none: string;
  tight: string;
  snug: string;
  normal: string;
  relaxed: string;
  loose: string;
};

export type LetterSpacing = {
  tighter: string;
  tight: string;
  normal: string;
  wide: string;
  wider: string;
  widest: string;
};

export type Typography = {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
};

export type SpacingKey = 
  | '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
  | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60'
  | '64' | '72' | '80' | '96';

export type Spacing = {
  [K in SpacingKey]: string;
};

export type BorderRadiusKey = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

export type BorderRadius = {
  [K in BorderRadiusKey]: string;
};

export type BoxShadowKey = 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none';

export type BoxShadow = {
  [K in BoxShadowKey]: string;
};

export type ZIndexKey = 'hide' | 'auto' | 'base' | 'docked' | 'dropdown' | 'sticky' | 'banner' | 'overlay' | 'modal' | 'popover' | 'skipLink' | 'toast' | 'tooltip';

export type ZIndex = {
  [K in ZIndexKey]: string | number;
};

export type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Breakpoints = {
  [K in BreakpointKey]: string;
};

export type TransitionDuration = {
  fastest: string;
  faster: string;
  fast: string;
  normal: string;
  slow: string;
  slower: string;
  slowest: string;
};

export type TransitionEasing = {
  linear: string;
  ease: string;
  easeIn: string;
  easeOut: string;
  easeInOut: string;
};

export type Transition = {
  duration: TransitionDuration;
  easing: TransitionEasing;
};

export type ComponentTokens = {
  button: {
    height: {
      sm: string;
      md: string;
      lg: string;
    };
    padding: {
      sm: string;
      md: string;
      lg: string;
    };
  };
  input: {
    height: {
      sm: string;
      md: string;
      lg: string;
    };
    padding: {
      sm: string;
      md: string;
      lg: string;
    };
  };
};

export type DesignTokens = {
  colors: ColorSystem;
  typography: Typography;
  spacing: Spacing;
  borderRadius: BorderRadius;
  boxShadow: BoxShadow;
  zIndex: ZIndex;
  breakpoints: Breakpoints;
  transition: Transition;
  components: ComponentTokens;
};

// Utility types for component props
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type InputSize = 'sm' | 'md' | 'lg';

// CSS Custom Property types
export type CSSVarName<T extends string> = `--${T}`;
export type CSSVarValue = string | number;

// Token path types for dynamic access
export type TokenPath = 
  | `colors.${keyof ColorSystem}.${ColorScale}`
  | `colors.background.${keyof ColorSystem['background']}`
  | `colors.foreground.${keyof ColorSystem['foreground']}`
  | `typography.fontSize.${keyof FontSize}`
  | `typography.fontWeight.${keyof FontWeight}`
  | `typography.lineHeight.${keyof LineHeight}`
  | `typography.letterSpacing.${keyof LetterSpacing}`
  | `spacing.${SpacingKey}`
  | `borderRadius.${BorderRadiusKey}`
  | `boxShadow.${BoxShadowKey}`
  | `zIndex.${ZIndexKey}`
  | `breakpoints.${BreakpointKey}`
  | `transition.duration.${keyof TransitionDuration}`
  | `transition.easing.${keyof TransitionEasing}`;

// Utility type to get nested object values
export type GetNestedValue<T, K extends string> = K extends keyof T
  ? T[K]
  : K extends `${infer P}.${infer S}`
  ? P extends keyof T
    ? GetNestedValue<T[P], S>
    : never
  : never;
