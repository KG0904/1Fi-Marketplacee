import { useState, useEffect } from "react";
import { ArrowLeft, Share2, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { formatINR } from "../utils/helpers";

// --------------------------------------------------
// EMI Plan Radio Card
// --------------------------------------------------
const EMIPlanCard = ({ plan, isSelected, onSelect }) => (
  <button
    onClick={() => onSelect(plan)}
    className={`no-tap-highlight w-full flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all duration-150
      ${isSelected
        ? "border-purple-600 bg-purple-50"
        : "border-gray-200 bg-white hover:border-purple-200"
      }`}
  >
    {/* Radio circle */}
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-150
        ${isSelected ? "border-purple-600 bg-purple-600" : "border-gray-300 bg-white"}`}
    >
      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
    </div>

    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-bold text-gray-900">
          {plan.months} Months
        </span>
        <span className="text-[11px] font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
          {plan.label}
        </span>
      </div>
      <p className="text-base font-extrabold text-gray-900 mt-0.5">
        {formatINR(plan.monthlyInstallment)}
        <span className="text-sm font-medium text-gray-500">/mo</span>
      </p>
    </div>

    <div className="text-right flex-shrink-0">
      <p className="text-[11px] text-gray-500">Total</p>
      <p className="text-xs font-bold text-gray-800">
        {formatINR(plan.monthlyInstallment * plan.months)}
      </p>
    </div>
  </button>
);

// --------------------------------------------------
// How-to-Use numbered list item
// --------------------------------------------------
const HowToStep = ({ step, text }) => (
  <div className="flex gap-3 items-start">
    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-xs font-bold
                    flex items-center justify-center flex-shrink-0 mt-0.5">
      {step}
    </div>
    <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
  </div>
);

// --------------------------------------------------
// Terms & Conditions bullet item
// --------------------------------------------------
const TermsItem = ({ text }) => (
  <div className="flex gap-3 items-start">
    <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
  </div>
);

// --------------------------------------------------
// EMI Selection Sheet (Full-screen bottom-sheet sim)
// --------------------------------------------------
const EmiSelectionSheet = ({ product, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedPlan, setSelectedPlan] = useState(product.emiPlans[0]);
  const [showAllTerms, setShowAllTerms] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animate entrance
  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 280);
  };

  const handleContinue = () => {
    const payload = {
      product: {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        selectedVariant,
      },
      emiPlan: selectedPlan,
    };
    console.log("🛒 1Fi Marketplace — Continue:", payload);
    alert(
      `Order placed!\n\n${product.name} (${selectedVariant})\n${selectedPlan.months}-month EMI @ ${formatINR(selectedPlan.monthlyInstallment)}/mo\n\nCheck console for full details.`
    );
  };

  const visibleTerms = showAllTerms
    ? product.termsAndConditions
    : product.termsAndConditions.slice(0, 3);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Sheet panel */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-gray-50 transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* ---- Header ---- */}
        <div className="flex items-center justify-between px-4 pt-12 pb-3 bg-gray-50 border-b border-gray-100">
          <button
            onClick={handleClose}
            className="no-tap-highlight w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm"
          >
            <ArrowLeft size={18} className="text-gray-700" />
          </button>
          <h2 className="text-sm font-bold text-gray-900">Pay using 1Fi</h2>
          <button className="no-tap-highlight w-9 h-9 flex items-center justify-center rounded-full border-2 border-purple-600">
            <Share2 size={16} className="text-purple-600" />
          </button>
        </div>

        {/* ---- Scrollable content ---- */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pb-28">
          {/* Product overview card */}
          <div className="mx-4 mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/80x80/f3f4f6/9ca3af?text=${encodeURIComponent(product.brand)}`;
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-purple-700 uppercase tracking-wide">
                  {product.brand}
                </p>
                <h3 className="text-base font-bold text-gray-900 leading-snug mt-0.5">
                  {product.name}
                </h3>
                <p className="text-xl font-extrabold text-gray-900 mt-1">
                  {formatINR(product.price)}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-3" />

            {/* Variant selector */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">
                SELECT VARIANT
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`no-tap-highlight px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150
                      ${selectedVariant === v
                        ? "bg-purple-700 text-white border-purple-700"
                        : "bg-white text-gray-700 border-gray-200 hover:border-purple-300"
                      }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* EMI Plans */}
          <div className="mx-4 mt-4">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Choose EMI Plan
            </h3>
            <div className="flex flex-col gap-2">
              {product.emiPlans.map((plan) => (
                <EMIPlanCard
                  key={plan.months}
                  plan={plan}
                  isSelected={selectedPlan.months === plan.months}
                  onSelect={setSelectedPlan}
                />
              ))}
            </div>
          </div>

          {/* How to use */}
          <div className="mx-4 mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              How to use
            </h3>
            <div className="flex flex-col gap-3">
              {product.howToUse.map((step, i) => (
                <HowToStep key={i} step={i + 1} text={step} />
              ))}
            </div>
          </div>

          {/* Terms & conditions */}
          <div className="mx-4 mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Terms &amp; Conditions
            </h3>
            <div className="flex flex-col gap-3">
              {visibleTerms.map((term, i) => (
                <TermsItem key={i} text={term} />
              ))}
            </div>
            {product.termsAndConditions.length > 3 && (
              <button
                onClick={() => setShowAllTerms(!showAllTerms)}
                className="no-tap-highlight mt-3 flex items-center gap-1 text-sm font-bold text-purple-700"
              >
                {showAllTerms ? (
                  <>
                    View Less <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    View All <ChevronDown size={16} />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Bottom spacer */}
          <div className="h-4" />
        </div>

        {/* ---- Sticky CTA Footer ---- */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent px-4 pt-4 pb-6">
          <div className="flex items-center gap-3">
            {/* Share circle button */}
            <button className="no-tap-highlight w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-purple-600">
              <Share2 size={18} className="text-purple-600" />
            </button>

            {/* Continue button */}
            <button
              onClick={handleContinue}
              className="no-tap-highlight flex-1 h-12 bg-purple-700 hover:bg-purple-800 active:bg-purple-900
                         text-white font-bold text-base rounded-full flex items-center justify-center gap-2
                         transition-colors duration-150 shadow-lg shadow-purple-700/30"
            >
              Continue →
            </button>
          </div>

          {/* Selected EMI summary */}
          <p className="text-center text-xs text-gray-500 mt-2">
            {selectedPlan.months} months · {formatINR(selectedPlan.monthlyInstallment)}/mo ·{" "}
            {selectedVariant}
          </p>
        </div>
      </div>
    </>
  );
};

export default EmiSelectionSheet;
