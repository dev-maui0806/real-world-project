'use client';

export default function FixedWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      {/* Text Pill */}
      <div className="bg-white rounded-full px-6 py-3 shadow-lg">
        <p className="text-black font-semibold text-sm md:text-base whitespace-nowrap">
          Ready to Change Your Life
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={() => {
          const checkoutUrl = '';
          // window.open(checkoutUrl, '_blank');
        }}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ffa545] hover:bg-[#ff9b38] shadow-lg transition-all duration-300 hover:scale-110 flex-shrink-0"
        aria-label="Join now"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black"
        >
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          <polyline points="17 21 17 13 7 13 7 21" />
          <polyline points="7 3 7 8 15 8" />
        </svg>
      </button>
    </div>
  );
}
