import { Sparkles } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-700 px-5 pt-10 pb-8">
      {/* Decorative glow blobs */}
      <div className="absolute -top-8 -right-8 w-52 h-52 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-indigo-600/20 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between">
        {/* Text section */}
        <div className="flex-1 pr-4">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 mb-3">
            <Sparkles size={12} className="text-yellow-300" />
            <span className="text-white text-[11px] font-semibold tracking-wide">
              NO-COST EMIs
            </span>
          </div>
          <h1 className="text-white text-2xl font-extrabold leading-tight tracking-tight">
            Shop today,
            <br />
            Pay later using
            <br />
            <span className="text-purple-200">Mutual funds.</span>
          </h1>
          <p className="text-purple-200/80 text-xs mt-2 leading-relaxed">
            No credit score required. No interest.
            <br />
            Backed by your investments.
          </p>
        </div>

        {/* Illustrative product icons */}
        <div className="relative w-36 h-28 flex-shrink-0">
          {/* Smartphone */}
          <div className="absolute top-0 right-2 w-14 h-24 bg-gray-900 rounded-xl border-2 border-gray-700 shadow-2xl flex items-center justify-center">
            <div className="w-10 h-20 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-lg flex items-end justify-center pb-1">
              <div className="w-5 h-0.5 bg-white/40 rounded-full" />
            </div>
          </div>
          {/* Laptop */}
          <div className="absolute bottom-0 left-0 w-24 h-14">
            <div className="w-full h-10 bg-gray-800 rounded-t-lg border border-gray-600 shadow-xl flex items-center justify-center">
              <div className="w-16 h-7 bg-gradient-to-br from-purple-400 to-indigo-500 rounded" />
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-b-lg" />
          </div>
          {/* Gold coin */}
          <div className="absolute -top-1 left-6 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg flex items-center justify-center">
            <span className="text-yellow-900 font-bold text-xs">₹</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
