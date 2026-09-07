import { Home, ShoppingBag, Receipt, BarChart2, User } from "lucide-react";

const iconMap = { Home, ShoppingBag, Receipt, BarChart2, User };

const BottomNavBar = ({ activeNavId, onNavChange }) => {
  const navItems = [
    { id: "home", label: "Home", icon: "Home" },
    { id: "shop", label: "Shop", icon: "ShoppingBag" },
    { id: "emi-dues", label: "EMI Dues", icon: "Receipt" },
    { id: "limit", label: "Limit", icon: "BarChart2" },
    { id: "profile", label: "Profile", icon: "User" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = activeNavId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavChange(item.id)}
              className="no-tap-highlight flex flex-col items-center justify-center gap-0.5 flex-1 py-2 transition-all duration-150"
            >
              <div className="relative">
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.2 : 1.7}
                  className={isActive ? "text-purple-700" : "text-gray-400"}
                />
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-700" />
                )}
              </div>
              <span
                className={`text-[10px] font-medium mt-1.5 transition-colors duration-150 ${
                  isActive ? "text-purple-700" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;
