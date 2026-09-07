import { useState, useMemo } from "react";
import HeroBanner from "./HeroBanner";
import TabBar from "./TabBar";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import EmiSelectionSheet from "./EmiSelectionSheet";
import BottomNavBar from "./BottomNavBar";
import { MOCK_PRODUCTS } from "../data/mockData";

// --------------------------------------------------
// Placeholder panels for non-active tabs
// --------------------------------------------------
const ComingSoonPanel = ({ label }) => (
  <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
    <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4">
      <span className="text-3xl">🏪</span>
    </div>
    <h3 className="text-base font-bold text-gray-800 mb-1">{label}</h3>
    <p className="text-sm text-gray-500">This section is coming soon.</p>
  </div>
);

// --------------------------------------------------
// Main ShopLayout orchestrator
// --------------------------------------------------
const ShopLayout = () => {
  const [activeTab, setActiveTab] = useState("1fi-marketplace");
  const [activeNav, setActiveNav] = useState("shop");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Derive filtered products from search query
  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchQuery("");
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseSheet = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 max-w-md mx-auto">
      {/* ---- Hero Banner ---- */}
      <HeroBanner />

      {/* ---- Tab Bar (sticky) ---- */}
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* ---- Tab Content ---- */}
      {activeTab === "top-brands" && (
        <ComingSoonPanel label="Top Brands" />
      )}

      {activeTab === "nearby-stores" && (
        <ComingSoonPanel label="Nearby Stores" />
      )}

      {activeTab === "1fi-marketplace" && (
        <>
          {/* Search */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          {/* Products */}
          <ProductList
            products={filteredProducts}
            searchQuery={searchQuery}
            onProductClick={handleProductClick}
          />
        </>
      )}

      {/* ---- Bottom padding so content clears nav bar ---- */}
      <div className="h-24" />

      {/* ---- Bottom Navigation ---- */}
      <BottomNavBar activeNavId={activeNav} onNavChange={setActiveNav} />

      {/* ---- EMI Selection Sheet (portal-like overlay) ---- */}
      {selectedProduct && (
        <EmiSelectionSheet
          product={selectedProduct}
          onClose={handleCloseSheet}
        />
      )}
    </div>
  );
};

export default ShopLayout;
