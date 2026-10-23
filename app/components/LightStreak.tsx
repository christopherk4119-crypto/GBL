// Signature glowing light-blue curved streak (from the business card arc).
// Used in the hero and as a section divider.
export default function LightStreak({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none relative h-16 w-full overflow-hidden md:h-24 ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full ${flip ? "-scale-x-100" : ""}`}
      >
        <defs>
          <linearGradient id="streak-fade" x1="0" x2="1">
            <stop offset="0" stopColor="#A8DDE8" stopOpacity="0" />
            <stop offset="0.5" stopColor="#D4F1F7" stopOpacity="1" />
            <stop offset="1" stopColor="#A8DDE8" stopOpacity="0" />
          </linearGradient>
          <filter id="streak-glow" x="-10%" y="-200%" width="120%" height="500%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <path d="M0 100 Q720 -20 1440 70" fill="none" stroke="#A8DDE8" strokeWidth="8" opacity="0.35" filter="url(#streak-glow)" className="animate-shimmer" />
        <path d="M0 100 Q720 -20 1440 70" fill="none" stroke="url(#streak-fade)" strokeWidth="2" />
      </svg>
    </div>
  );
}
