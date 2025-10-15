import React from 'react';
import { Card } from '../../molecules/Card';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import styles from './ProductList.module.css';

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  image?: string;
  category?: string;
  rating?: number;
  tags?: string[];
}

export interface ProductListProps {
  products: Product[];
  loading?: boolean;
  error?: string;
  onProductClick?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onFavorite?: (product: Product) => void;
  showAddToCart?: boolean;
  showFavorite?: boolean;
  className?: string;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  loading = false,
  error,
  onProductClick,
  onAddToCart,
  onFavorite,
  showAddToCart = true,
  showFavorite = true,
  className,
}) => {
  if (loading) {
    return (
      <div className={`${styles.productList} ${className || ''}`}>
        <div className={styles.loading}>
          <Text variant="body" color="secondary">Loading products...</Text>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.productList} ${className || ''}`}>
        <div className={styles.error}>
          <Icon name="error" size="lg" color="error" />
          <Text variant="body" color="error">{error}</Text>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={`${styles.productList} ${className || ''}`}>
        <div className={styles.empty}>
          <Icon name="star" size="xl" color="muted" />
          <Text variant="h4" color="secondary">No products found</Text>
          <Text variant="body" color="muted">Try adjusting your search criteria</Text>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.productList} ${className || ''}`}>
      <div className={styles.grid}>
        {products.map((product) => (
          <Card
            key={product.id}
            variant="elevated"
            padding="none"
            className={styles.productCard}
            onClick={() => onProductClick?.(product)}
          >
            {/* Product Image */}
            {product.image && (
              <div className={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                {showFavorite && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className={styles.favoriteButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      onFavorite?.(product);
                    }}
                  >
                    <Icon name="heart" size="sm" />
                  </Button>
                )}
              </div>
            )}

            {/* Product Info */}
            <div className={styles.productInfo}>
              {product.category && (
                <Text variant="overline" color="secondary" className={styles.category}>
                  {product.category}
                </Text>
              )}
              
              <Text variant="h5" weight="semibold" className={styles.productName}>
                {product.name}
              </Text>
              
              <Text variant="body" color="secondary" className={styles.description}>
                {product.description}
              </Text>

              {/* Rating */}
              {product.rating && (
                <div className={styles.rating}>
                  <Icon name="star" size="sm" color="warning" />
                  <Text variant="caption" color="secondary">
                    {product.rating.toFixed(1)}
                  </Text>
                </div>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className={styles.tags}>
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Price and Actions */}
              <div className={styles.footer}>
                {product.price && (
                  <Text variant="h5" weight="bold" color="primary">
                    ${product.price.toFixed(2)}
                  </Text>
                )}
                
                {showAddToCart && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart?.(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
