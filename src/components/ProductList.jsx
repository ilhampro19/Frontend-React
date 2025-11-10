import React from "react";
import { FixedSizeList as List } from "react-window";
import ProductRow from "./ProductRow";

const ProductList = ({ filteredProducts = [], onAddToCart }) => {
  const Row = React.useCallback(
    ({ index, style }) => {

      return (
        <div style={style}>
          <ProductRow
            product={filteredProducts[index]}
            onAddToCart={onAddToCart}
          />
        </div>
      );
    },
    [filteredProducts, onAddToCart]
  );

  const itemSize = 80;

  return (
    <List
      height={600}
      itemCount={filteredProducts.length}
      itemSize={itemSize}
      width="100%"
    >
      {Row}
    </List>
  );
};

export default ProductList;