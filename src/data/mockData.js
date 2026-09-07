// =============================================================================
// MOCK DATA — All product data lives here. No hardcoded data in UI components.
// =============================================================================

export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 134900,
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708",
    badge: "Best Seller",
    variants: ["128GB", "256GB", "512GB", "1TB"],
    emiPlans: [
      { months: 3, monthlyInstallment: 44967, interest: 0, label: "No Cost EMI" },
      { months: 6, monthlyInstallment: 22483, interest: 0, label: "No Cost EMI" },
      { months: 12, monthlyInstallment: 11242, interest: 0, label: "No Cost EMI" },
      { months: 18, monthlyInstallment: 7494, interest: 0, label: "No Cost EMI" },
      { months: 24, monthlyInstallment: 5621, interest: 0, label: "No Cost EMI" },
    ],
    howToUse: [
      "Visit Apple's official website or the Apple Store app and add the iPhone 15 Pro to your cart.",
      "At checkout, select 'Gift Card or Voucher' as your payment method and enter the 1Fi voucher code.",
      "If your purchase amount exceeds the voucher value, pay the remaining balance using any other method.",
    ],
    termsAndConditions: [
      "Voucher is valid for 12 months from the date of issue.",
      "Can only be redeemed on apple.com or the Apple Store app.",
      "Voucher cannot be clubbed with other offers or promotions.",
      "Partial redemption is allowed; remaining balance stays on the voucher.",
      "Voucher is non-refundable and cannot be exchanged for cash.",
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 129999,
    imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-ultra-s928-sm-s928bztqins-thumb-539573422",
    badge: "New Launch",
    variants: ["256GB", "512GB", "1TB"],
    emiPlans: [
      { months: 3, monthlyInstallment: 43333, interest: 0, label: "No Cost EMI" },
      { months: 6, monthlyInstallment: 21667, interest: 0, label: "No Cost EMI" },
      { months: 12, monthlyInstallment: 10833, interest: 0, label: "No Cost EMI" },
      { months: 24, monthlyInstallment: 5417, interest: 0, label: "No Cost EMI" },
    ],
    howToUse: [
      "Visit Samsung Shop India at samsung.com/in/shop and add your product.",
      "Select EMI payment and enter your 1Fi voucher code at checkout.",
      "Complete the purchase — your voucher covers up to the redeemable limit.",
    ],
    termsAndConditions: [
      "Valid for 12 months from issue date.",
      "Redeemable only on Samsung's official website.",
      "Cannot be combined with exchange offers.",
      "Non-transferable and non-refundable.",
    ],
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "Audio",
    price: 29990,
    imageUrl: "https://www.bhphotovideo.com/images/images2500x2500/sony_wh1000xm5_b_wh_1000xm5_wireless_noise_canceling_over_ear_1662887.jpg",
    badge: "Top Rated",
    variants: ["Black", "Silver", "Midnight Blue"],
    emiPlans: [
      { months: 3, monthlyInstallment: 9997, interest: 0, label: "No Cost EMI" },
      { months: 6, monthlyInstallment: 4998, interest: 0, label: "No Cost EMI" },
      { months: 12, monthlyInstallment: 2499, interest: 0, label: "No Cost EMI" },
    ],
    howToUse: [
      "Head to Sony India's official store at store.sony.co.in.",
      "Add the WH-1000XM5 to your cart and proceed to checkout.",
      "Enter your 1Fi voucher code in the 'Promo/Gift Card' section.",
    ],
    termsAndConditions: [
      "Valid for purchases on Sony's official India store only.",
      "Voucher validity: 12 months from date of issue.",
      "Non-refundable and cannot be exchanged for cash.",
      "One voucher per transaction.",
    ],
  },
  {
    id: 4,
    name: "Apple MacBook Air M3",
    brand: "Apple",
    category: "Laptops",
    price: 114900,
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    badge: "",
    variants: ["8GB/256GB", "8GB/512GB", "16GB/512GB", "24GB/2TB"],
    emiPlans: [
      { months: 6, monthlyInstallment: 19150, interest: 0, label: "No Cost EMI" },
      { months: 12, monthlyInstallment: 9575, interest: 0, label: "No Cost EMI" },
      { months: 18, monthlyInstallment: 6383, interest: 0, label: "No Cost EMI" },
      { months: 24, monthlyInstallment: 4788, interest: 0, label: "No Cost EMI" },
    ],
    howToUse: [
      "Visit apple.com/in/shop and configure your MacBook Air M3.",
      "At checkout, apply the 1Fi voucher code under 'Gift Cards & Store Credits'.",
      "If the amount exceeds the voucher, pay the remaining balance via another method.",
    ],
    termsAndConditions: [
      "Valid for 12 months from date of issuance.",
      "Redeemable on apple.com/in or Apple Store app only.",
      "Not valid in conjunction with any other promotion or discount.",
      "Non-refundable and non-transferable.",
    ],
  },
  {
    id: 5,
    name: "Dyson V15 Detect Vacuum",
    brand: "Dyson",
    category: "Home Appliances",
    price: 62900,
    imageUrl: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/394641-01.png",
    badge: "Limited Stock",
    variants: ["Standard", "Absolute", "Fluffy"],
    emiPlans: [
      { months: 3, monthlyInstallment: 20967, interest: 0, label: "No Cost EMI" },
      { months: 6, monthlyInstallment: 10483, interest: 0, label: "No Cost EMI" },
      { months: 12, monthlyInstallment: 5242, interest: 0, label: "No Cost EMI" },
    ],
    howToUse: [
      "Visit dyson.in and add the V15 Detect to your cart.",
      "At checkout, navigate to 'Gift Voucher' field and enter your 1Fi voucher code.",
      "Complete your order. Dyson will ship the product to your registered address.",
    ],
    termsAndConditions: [
      "Valid only on dyson.in — official Dyson India website.",
      "Voucher is valid for 6 months from date of issue.",
      "Cannot be combined with Dyson's seasonal sale discounts.",
      "Returns and refunds subject to Dyson's standard policy.",
    ],
  },
  {
    id: 6,
    name: "iPad Pro 12.9\" M4",
    brand: "Apple",
    category: "Tablets",
    price: 109900,
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-select-wifi-spacegray-202405?wid=940&hei=1112&fmt=png-alpha&.v=1713308160288",
    badge: "New",
    variants: ["256GB Wi-Fi", "512GB Wi-Fi", "1TB Wi-Fi", "256GB Cellular"],
    emiPlans: [
      { months: 6, monthlyInstallment: 18317, interest: 0, label: "No Cost EMI" },
      { months: 12, monthlyInstallment: 9158, interest: 0, label: "No Cost EMI" },
      { months: 18, monthlyInstallment: 6106, interest: 0, label: "No Cost EMI" },
      { months: 24, monthlyInstallment: 4579, interest: 0, label: "No Cost EMI" },
    ],
    howToUse: [
      "Shop for your iPad Pro on apple.com/in or the Apple Store app.",
      "Apply the 1Fi voucher at checkout under 'Gift Cards & Store Credits'.",
      "Enjoy your purchase and track delivery through Apple's order tracking.",
    ],
    termsAndConditions: [
      "Voucher valid for 12 months.",
      "Redeemable only on Apple's official platforms.",
      "Not valid with Apple Education pricing or other discounts.",
      "Unused balance remains on the voucher for future use.",
    ],
  },
];

// Tab definitions
export const SHOP_TABS = [
  { id: "top-brands", label: "Top Brands" },
  { id: "nearby-stores", label: "Nearby Stores" },
  { id: "1fi-marketplace", label: "1Fi Marketplace" },
];

// Bottom nav items
export const BOTTOM_NAV_ITEMS = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "shop", label: "Shop", icon: "ShoppingBag" },
  { id: "emi-dues", label: "EMI Dues", icon: "Receipt" },
  { id: "limit", label: "Limit", icon: "BarChart2" },
  { id: "profile", label: "Profile", icon: "User" },
];
