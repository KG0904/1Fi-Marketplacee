import { formatINR, getLowestEMI } from "../utils/helpers";

const ProductCard = ({ product, onClick }) => {
  const lowestEMI = getLowestEMI(product.emiPlans);

  return (
    <button
      onClick={() => onClick(product)}
      className="no-tap-highlight w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-left
                 active:scale-[0.98] transition-transform duration-100"
    >
      {/* Product image */}
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/300x300/f3f4f6/9ca3af?text=${encodeURIComponent(product.brand)}`;
          }}
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-purple-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="p-3">
        <p className="text-[11px] font-semibold text-purple-700 uppercase tracking-wide mb-0.5">
          {product.brand}
        </p>
        <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 mb-2">
          {product.name}
        </h3>
        <p className="text-base font-extrabold text-gray-900">
          {formatINR(product.price)}
        </p>
        {lowestEMI && (
          <p className="text-[11px] text-gray-500 mt-0.5">
            Starting at{" "}
            <span className="font-semibold text-purple-700">
              {formatINR(lowestEMI.monthlyInstallment)}/mo
            </span>
          </p>
        )}

        {/* No-cost EMI badge */}
        <div className="mt-2 inline-flex items-center gap-1 bg-purple-50 border border-purple-100 rounded-full px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
          <span className="text-[10px] font-semibold text-purple-700">
            No-Cost EMI
          </span>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
