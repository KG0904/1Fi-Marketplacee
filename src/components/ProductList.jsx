import { SearchX } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, searchQuery, onProductClick }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4">
          <SearchX size={28} className="text-purple-400" />
        </div>
        <h3 className="text-base font-bold text-gray-800 mb-1">No products found</h3>
        <p className="text-sm text-gray-500">
          No results for{" "}
          <span className="font-semibold text-gray-700">"{searchQuery}"</span>.
          <br />
          Try a different keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-gray-900">1Fi Marketplace</h2>
        <span className="text-xs text-gray-500 font-medium">
          {products.length} product{products.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={onProductClick} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
