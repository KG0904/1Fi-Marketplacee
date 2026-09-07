import { SHOP_TABS } from "../data/mockData";

const TabBar = ({ activeTab, onTabChange }) => {
  return (
    <div className="sticky top-0 z-30 bg-gray-50 px-4 py-3">
      <div className="flex items-center bg-gray-200/70 rounded-full p-1 gap-1">
        {SHOP_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                no-tap-highlight flex-1 py-2 px-3 rounded-full text-sm font-semibold
                transition-all duration-200 whitespace-nowrap
                ${
                  isActive
                    ? "bg-white text-gray-900 shadow-md shadow-gray-300/60"
                    : "bg-transparent text-gray-500 hover:text-gray-700"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
