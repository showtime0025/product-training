import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import your tokens
import { tokens } from '../../tokens';
import './Tokens.css';

const meta: Meta = {
  title: 'FOUNDATIONS/Tokens',
  component: () => <div />,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Color System Story
export const Colors: Story = {
  render: () => (
    <div className="tokens-container">
      <h1 className="tokens-title">Color System</h1>
      
      {/* Primary Colors */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Primary Colors</h2>
        <div className="color-grid">
          {Object.entries(tokens.colors.primary).map(([scale, value]) => (
            <div key={scale} className="color-item">
              <div
                className="color-swatch"
                style={{ backgroundColor: value }}
              />
              <div className="color-label">{scale}</div>
              <div className="color-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Colors */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Secondary Colors</h2>
        <div className="color-grid">
          {Object.entries(tokens.colors.secondary).map(([scale, value]) => (
            <div key={scale} className="color-item">
              <div
                className="color-swatch"
                style={{ backgroundColor: value }}
              />
              <div className="color-label">{scale}</div>
              <div className="color-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Semantic Colors</h2>
        <div className="semantic-colors">
          {['success', 'warning', 'error'].map((semantic) => (
            <div key={semantic} className="semantic-color-group">
              <h3 className="semantic-color-title">{semantic}</h3>
              <div className="semantic-color-grid">
                {Object.entries(tokens.colors[semantic as keyof typeof tokens.colors]).map(([scale, value]) => (
                  <div key={scale} className="semantic-color-item">
                    <div
                      className="semantic-color-swatch"
                      style={{ backgroundColor: value as string }}
                    />
                    <div className="semantic-color-label">{scale}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neutral Colors */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Neutral Colors</h2>
        <div className="color-grid">
          {Object.entries(tokens.colors.neutral).map(([scale, value]) => (
            <div key={scale} className="color-item">
              <div
                className="color-swatch"
                style={{ backgroundColor: value }}
              />
              <div className="color-label">{scale}</div>
              <div className="color-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Typography Story
export const Typography: Story = {
  render: () => (
    <div className="tokens-container">
      <h1 className="tokens-title">Typography</h1>
      
      {/* Font Sizes */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Font Sizes</h2>
        <div className="typography-examples">
          {Object.entries(tokens.typography.fontSize).map(([size, value]) => (
            <div key={size} className="typography-row">
              <div className="typography-label">{size}</div>
              <div className="typography-sample" style={{ fontSize: value }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="typography-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Weights */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Font Weights</h2>
        <div className="typography-examples">
          {Object.entries(tokens.typography.fontWeight).map(([weight, value]) => (
            <div key={weight} className="typography-row">
              <div className="typography-label">{weight}</div>
              <div className="typography-sample" style={{ fontWeight: value }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="typography-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Line Heights */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Line Heights</h2>
        <div className="typography-examples">
          {Object.entries(tokens.typography.lineHeight).map(([height, value]) => (
            <div key={height} className="typography-row">
              <div className="typography-label">{height}</div>
              <div className="typography-sample-line-height" style={{ lineHeight: value }}>
                The quick brown fox jumps over the lazy dog. This is a longer text to demonstrate line height.
              </div>
              <div className="typography-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Letter Spacing */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Letter Spacing</h2>
        <div className="typography-examples">
          {Object.entries(tokens.typography.letterSpacing).map(([spacing, value]) => (
            <div key={spacing} className="typography-row">
              <div className="typography-label">{spacing}</div>
              <div className="typography-sample" style={{ letterSpacing: value }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="typography-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Families */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Font Families</h2>
        <div className="typography-examples">
          {Object.entries(tokens.typography.fontFamily).map(([family, value]) => (
            <div key={family} className="typography-row">
              <div className="typography-label">{family}</div>
              <div className="typography-sample" style={{ fontFamily: Array.isArray(value) ? value.join(', ') : value }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="typography-value font-family-value">
                {Array.isArray(value) ? value.join(', ') : value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Spacing Story
export const Spacing: Story = {
  render: () => (
    <div className="tokens-container">
      <h1 className="tokens-title">Spacing Scale</h1>
      
      <div className="tokens-section">
        <h2 className="tokens-section-title">Spacing Values</h2>
        <div className="spacing-grid">
          {Object.entries(tokens.spacing).map(([size, value]) => (
            <div key={size} className="spacing-item">
              <div
                className="spacing-box"
                style={{ width: value, height: value }}
              />
              <div className="spacing-label">{size}</div>
              <div className="spacing-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="tokens-section">
        <h2 className="tokens-section-title">Spacing in Context</h2>
        <div className="spacing-context">
          {['0', '1', '2', '3', '4', '6', '8', '12', '16', '20', '24'].map((size) => (
            <div key={size} className="spacing-context-row">
              <div className="spacing-context-label">{size}</div>
              <div
                className="spacing-context-box"
                style={{ padding: tokens.spacing[size as keyof typeof tokens.spacing] }}
              >
                Padding: {size}
              </div>
              <div className="spacing-context-value">
                {tokens.spacing[size as keyof typeof tokens.spacing]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Border Radius Story
export const BorderRadius: Story = {
  render: () => (
    <div className="tokens-container">
      <h1 className="tokens-title">Border Radius</h1>
      
      <div className="border-radius-grid">
        {Object.entries(tokens.borderRadius).map(([radius, value]) => (
          <div key={radius} className="border-radius-item">
            <div
              className="border-radius-box"
              style={{ borderRadius: value }}
            />
            <div className="border-radius-label">{radius}</div>
            <div className="border-radius-value">{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Shadows Story
export const Shadows: Story = {
  render: () => (
    <div className="tokens-container">
      <h1 className="tokens-title">Shadows</h1>
      
      <div className="shadows-grid">
        {Object.entries(tokens.boxShadow).map(([shadow, value]) => (
          <div key={shadow} className="shadow-item">
            <div
              className="shadow-box"
              style={{ boxShadow: value }}
            >
              {shadow}
            </div>
            <div className="shadow-label">{shadow}</div>
            <div className="shadow-value">{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Z-Index Story
export const ZIndex: Story = {
  render: () => (
    <div className="tokens-container">
      <h1 className="tokens-title">Z-Index Scale</h1>
      
      <div className="z-index-demo">
        <p className="z-index-description">
          Layered elements with different z-index values:
        </p>
        
        {Object.entries(tokens.zIndex).map(([layer, value], index) => (
          <div
            key={layer}
            className="z-index-layer"
            style={{ 
              top: `${20 + index * 20}px`,
              left: `${20 + index * 20}px`,
              zIndex: value
            }}
          >
            {layer}
          </div>
        ))}
      </div>

      <div className="tokens-section">
        <h2 className="tokens-section-title">Z-Index Values</h2>
        <div className="z-index-values">
          {Object.entries(tokens.zIndex).map(([layer, value]) => (
            <div key={layer} className="z-index-value-row">
              <div className="z-index-layer-name">{layer}</div>
              <div className="z-index-layer-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Breakpoints Story
export const Breakpoints: Story = {
  render: () => (
    <div className="tokens-container">
      <h1 className="tokens-title">Breakpoints</h1>
      
      <div className="tokens-section">
        <h2 className="tokens-section-title">Responsive Breakpoints</h2>
        <div className="breakpoints-list">
          {Object.entries(tokens.breakpoints).map(([breakpoint, value]) => (
            <div key={breakpoint} className="breakpoint-item">
              <div className="breakpoint-name">{breakpoint}</div>
              <div className="breakpoint-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="tokens-section">
        <h2 className="tokens-section-title">Breakpoint Visualization</h2>
        <div className="breakpoints-visualization">
          {Object.entries(tokens.breakpoints).map(([breakpoint, value]) => (
            <div key={breakpoint} className="breakpoint-visual">
              <div className="breakpoint-visual-label">
                {breakpoint} ({value})
              </div>
              <div
                className="breakpoint-visual-bar"
                style={{ maxWidth: value }}
              >
                {breakpoint}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Transitions Story
export const Transitions: Story = {
  render: () => (
    <div className="tokens-container">
      <h1 className="tokens-title">Transitions</h1>
      
      {/* Durations */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Durations</h2>
        <div className="transitions-examples">
          {Object.entries(tokens.transition.duration).map(([duration, value]) => (
            <div key={duration} className="transition-row">
              <div className="transition-label">{duration}</div>
              <div
                className="transition-demo transition-demo-duration"
                style={{ transition: `all ${value} ease-in-out` }}
              >
                Hover me ({value})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Easings */}
      <div className="tokens-section">
        <h2 className="tokens-section-title">Easing Functions</h2>
        <div className="transitions-examples">
          {Object.entries(tokens.transition.easing).map(([easing, value]) => (
            <div key={easing} className="transition-row">
              <div className="transition-label">{easing}</div>
              <div
                className="transition-demo transition-demo-easing"
                style={{ transition: `all 0.5s ${value}` }}
              >
                Hover me ({value})
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// All Tokens Overview
export const AllTokens: Story = {
  render: () => (
    <div className="tokens-container">
      <h1 className="tokens-title tokens-title-large">Design Tokens Overview</h1>
      
      <div className="tokens-section">
        <h2 className="tokens-section-title tokens-section-title-large">Color System</h2>
        <div className="overview-colors">
          <div className="overview-color-group">
            <h3 className="overview-color-title">Primary Palette</h3>
            <div className="overview-color-palette">
              {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((scale) => (
                <div key={scale} className="overview-color-swatch">
                  <div
                    className="overview-color-box"
                    style={{ backgroundColor: tokens.colors.primary[scale as keyof typeof tokens.colors.primary] }}
                    title={`Primary ${scale}: ${tokens.colors.primary[scale as keyof typeof tokens.colors.primary]}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="overview-color-group">
            <h3 className="overview-color-title">Secondary Palette</h3>
            <div className="overview-color-palette">
              {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((scale) => (
                <div key={scale} className="overview-color-swatch">
                  <div
                    className="overview-color-box"
                    style={{ backgroundColor: tokens.colors.secondary[scale as keyof typeof tokens.colors.secondary] }}
                    title={`Secondary ${scale}: ${tokens.colors.secondary[scale as keyof typeof tokens.colors.secondary]}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="tokens-divider" />

      <div className="tokens-section">
        <h2 className="tokens-section-title tokens-section-title-large">Typography Scale</h2>
        <div className="overview-typography">
          {['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'].map((size) => (
            <div key={size} className="overview-typography-row">
              <div className="overview-typography-label">{size}</div>
              <div className="overview-typography-sample" style={{ fontSize: tokens.typography.fontSize[size as keyof typeof tokens.typography.fontSize] }}>
                Typography Scale - {size}
              </div>
              <div className="overview-typography-value">
                {tokens.typography.fontSize[size as keyof typeof tokens.typography.fontSize]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tokens-divider" />

      <div className="tokens-section">
        <h2 className="tokens-section-title tokens-section-title-large">Spacing Scale</h2>
        <div className="overview-spacing">
          {['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96'].map((space) => (
            <div key={space} className="overview-spacing-item">
              <div
                className="overview-spacing-box"
                style={{ 
                  width: tokens.spacing[space as keyof typeof tokens.spacing],
                  height: tokens.spacing[space as keyof typeof tokens.spacing]
                }}
              />
              <div className="overview-spacing-label">{space}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="tokens-divider" />

      <div className="tokens-section">
        <h2 className="tokens-section-title tokens-section-title-large">Component Tokens</h2>
        <div className="overview-components">
          <div className="overview-component-group">
            <h3 className="overview-component-title">Button Heights</h3>
            <div className="overview-component-examples">
              {Object.entries(tokens.components.button.height).map(([size, value]) => (
                <div key={size} className="overview-component-row">
                  <div className="overview-component-label">{size}</div>
                  <div
                    className="overview-component-demo overview-button-demo"
                    style={{ height: value }}
                  >
                    Button
                  </div>
                  <div className="overview-component-value">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="overview-component-group">
            <h3 className="overview-component-title">Input Heights</h3>
            <div className="overview-component-examples">
              {Object.entries(tokens.components.input.height).map(([size, value]) => (
                <div key={size} className="overview-component-row">
                  <div className="overview-component-label">{size}</div>
                  <div
                    className="overview-component-demo overview-input-demo"
                    style={{ height: value }}
                  >
                    Input
                  </div>
                  <div className="overview-component-value">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
