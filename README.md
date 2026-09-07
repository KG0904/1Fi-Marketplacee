# 1Fi Marketplace — Shop with Mutual Funds

> A fintech mobile web app that lets users shop using their mutual fund investments as collateral for **No-Cost EMIs** — no credit score required, no interest.

---
<img width="511" height="868" alt="WhatsApp Image 2026-09-07 at 4 47 40 PM" src="https://github.com/user-attachments/assets/a394410e-43ef-44ab-b832-1c30b2c1a169" />
<img width="1600" height="733" alt="image" src="https://github.com/user-attachments/assets/2ff7d10f-f34c-43de-84ce-58f3f85b1e1b" />



## 📱 What This Is

This project is the **Shop page** of the **1Fi** fintech app, built as a responsive mobile-first React web application. The core feature — the **1Fi Marketplace** — lets users browse products, select a storage/colour variant, choose an EMI plan, and proceed to checkout. The entire experience is designed to feel like a native mobile app, with smooth animations, sticky navigation, and a bottom-sheet detail view.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Navigate to the project
cd "C:/Users/KIIT0001/Desktop/Antigravity/1fi"

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

> **Tip:** For the best experience, open Chrome DevTools → Toggle Device Toolbar → choose **iPhone 14 Pro** or any 390px-wide preset.

### Production Build

```bash
npm run build
```

Output lands in `dist/`. Build time is ~2 seconds, final bundle is ~220 KB JS (gzipped: ~69 KB).

---

## 🗂️ Project Structure

```
1fi/
├── index.html                    ← HTML shell (mobile viewport, no user-scaling)
├── tailwind.config.js            ← Tailwind v3 config with custom brand colours
├── vite.config.js                ← Vite bundler config
│
└── src/
    ├── main.jsx                  ← React DOM entry point
    ├── App.jsx                   ← Root component (renders ShopLayout)
    ├── index.css                 ← Tailwind directives + global utilities
    │
    ├── data/
    │   └── mockData.js           ← ★ ALL product data lives here
    │
    ├── utils/
    │   └── helpers.js            ← formatINR(), getLowestEMI() utilities
    │
    └── components/
        ├── ShopLayout.jsx        ← Root layout — owns ALL state
        ├── HeroBanner.jsx        ← Purple/indigo gradient hero banner
        ├── TabBar.jsx            ← Segmented pill tab control
        ├── SearchBar.jsx         ← Live search input with clear button
        ├── ProductList.jsx       ← 2-column product grid + empty state
        ├── ProductCard.jsx       ← Individual product tile
        ├── EmiSelectionSheet.jsx ← Slide-up product detail & EMI picker
        └── BottomNavBar.jsx      ← Fixed 5-item bottom navigation
```

---

## 🏗️ Architecture

### State Management

All application state is lifted into **`ShopLayout`** — a single source of truth with no external state library needed.

| State Variable | Type | Purpose |
|---|---|---|
| `activeTab` | `string` | Which tab is selected (`"1fi-marketplace"` by default) |
| `activeNav` | `string` | Which bottom-nav item is active (`"shop"` by default) |
| `searchQuery` | `string` | Live search input string |
| `selectedProduct` | `object or null` | When set, opens the `EmiSelectionSheet` |

Filtered products are **derived** from `searchQuery` via `useMemo` — no duplicate state.

### Data Flow

```
mockData.js  →  ShopLayout  →  ProductList  →  ProductCard
                     ↓
              EmiSelectionSheet  (receives full product object)
                     ↓
              console.log({ product, emiPlan })  on "Continue →"
```

---

## 🧩 Components Explained

### `ShopLayout`
The top-level orchestrator. Renders all sections in order (banner → tabs → content → bottom nav) and conditionally renders the `EmiSelectionSheet` overlay when a product is selected. Handles tab switching and search clearing.

### `HeroBanner`
A full-width decorative banner with a purple-to-indigo gradient background. Contains the "Shop today, Pay later using Mutual funds" headline, a NO-COST EMIs badge, and illustrative device shapes built purely in Tailwind CSS.

### `TabBar`
A sticky segmented control with three tabs: **Top Brands**, **Nearby Stores**, and **1Fi Marketplace**. The active tab gets a white pill with a drop shadow; inactive tabs are transparent with gray text.

### `SearchBar`
A full-width input with a magnifying glass icon. Typing filters products in real time. Shows a clear (✕) button when there is input. Styled with `rounded-xl` and a light gray border.

### `ProductList`
Renders a responsive **2-column CSS grid** of `ProductCard` components. If the filtered list is empty, it shows a centred empty state with a `SearchX` icon and a message quoting the search query.

### `ProductCard`
Each card shows:
- Product image (with placehold.co fallback on error)
- Brand name (purple, uppercase)
- Product name (bold)
- Full price in Indian Rupees
- "Starting at ₹X/mo" derived from the cheapest EMI plan
- A "No-Cost EMI" pill badge

Cards have `rounded-2xl`, `shadow-sm`, and an `active:scale-[0.98]` press animation.

### `EmiSelectionSheet`
A full-screen overlay that slides up with a CSS `translateY` transition. Contains:

1. **Header** — Back (←) button and Share icon
2. **Product card** — Image, brand, name, price, and **variant selector** pills
3. **EMI plan selector** — Radio cards with months, monthly instalment, and total cost. Active plan gets a purple border
4. **How to Use** — Numbered steps with purple circle badges
5. **Terms & Conditions** — Checkmark list with a View All / View Less toggle
6. **Sticky footer** — Purple `Continue →` button that logs `{ product, emiPlan }` to the console

### `BottomNavBar`
A fixed bottom bar with five items: Home, Shop, EMI Dues, Limit, Profile. The active item renders in **purple** with a small dot underline indicator.

---

## 🎨 Design System

| Token | Tailwind Class | Hex |
|---|---|---|
| Primary purple | `bg-purple-700` | `#7C3AED` |
| Light purple bg | `bg-purple-50` | `#F5F3FF` |
| App background | `bg-gray-50` | `#F9FAFB` |
| Card radius | `rounded-2xl` | 16px |
| Button shape | `rounded-full` | pill |
| Primary text | `text-gray-900` | `#111827` |
| Secondary text | `text-gray-500` | `#6B7280` |

---

## 🛍️ Mock Product Catalogue

All data lives in `src/data/mockData.js`. Each product object has this shape:

```js
{
  id: 1,
  name: "Apple iPhone 15 Pro",
  brand: "Apple",
  category: "Smartphones",
  price: 134900,
  imageUrl: "https://...",
  badge: "Best Seller",       // optional chip on the card
  variants: ["128GB", "256GB", "512GB", "1TB"],
  emiPlans: [
    { months: 3,  monthlyInstallment: 44967, interest: 0, label: "No Cost EMI" },
    { months: 6,  monthlyInstallment: 22483, interest: 0, label: "No Cost EMI" },
  ],
  howToUse: ["Step 1...", "Step 2...", "Step 3..."],
  termsAndConditions: ["T&C item 1", "T&C item 2"],
}
```

To add more products, append to `MOCK_PRODUCTS` — no UI changes required.

### Current catalogue

| # | Product | Brand | Price |
|---|---|---|---|
| 1 | iPhone 15 Pro | Apple | ₹1,34,900 |
| 2 | Galaxy S24 Ultra | Samsung | ₹1,29,999 |
| 3 | WH-1000XM5 Headphones | Sony | ₹29,990 |
| 4 | MacBook Air M3 | Apple | ₹1,14,900 |
| 5 | Dyson V15 Detect Vacuum | Dyson | ₹62,900 |
| 6 | iPad Pro 12.9" M4 | Apple | ₹1,09,900 |

---

## 🖱️ User Interaction Map

```
[Hero Banner]
      ↓
[Tab Bar] ──→ Top Brands (placeholder)
         ──→ Nearby Stores (placeholder)
         ──→ 1Fi Marketplace ← default active
                  ↓
           [Search Bar] ──→ filters grid in real-time
                  ↓
           [Product Grid]
                  ↓ tap a card
           [EMI Sheet slides up]
             ├─ Pick variant (pill buttons)
             ├─ Pick EMI plan (radio card)
             ├─ Read How to Use (numbered steps)
             ├─ Read / expand Terms & Conditions
             └─ Tap "Continue →"
                    └─ console.log({ product, emiPlan }) + alert
```

---

## 🔧 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI components & hooks |
| Vite | 8 | Dev server & bundler |
| Tailwind CSS | 3 | Utility-first styling |
| lucide-react | latest | Icon library |

---

## 📐 Engineering Decisions

- **No external state library** — `useState` + `useMemo` is sufficient for this scope
- **No hardcoded data in UI components** — all product content is imported from `mockData.js`
- **Image error fallbacks** — `onError` swaps broken images for `placehold.co` placeholders
- **Slide-up animation** — CSS `translateY` transition driven by a single boolean; no animation library needed
- **`useMemo` for filtering** — avoids recalculating the product list on every unrelated render
- **`scrollbar-hide`** — custom Tailwind utility for a native-feeling scroll on all panels
- **Mobile-first** — `max-w-md mx-auto` centres the layout on desktop; the viewport meta disables pinch zoom

---

## 📄 License

MIT — free to use, modify, and distribute.
