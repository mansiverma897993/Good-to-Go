"use client"

export function GtgLogo() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-lg animate-pulse"></div>

      {/* SVG Logo */}
      <svg viewBox="0 0 100 100" className="relative w-8 h-8 drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
        {/* Animated checkmark circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="white"
          strokeWidth="3"
          className="animate-[spin_8s_linear_infinite]"
          opacity="0.3"
        />

        {/* Main GTG text-based mark */}
        <g>
          {/* G - First curved letter */}
          <path
            d="M 25 40 Q 25 25 40 25 Q 55 25 55 40 Q 55 55 40 55 L 35 55"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-[dash_3s_ease-in-out_infinite]"
          />

          {/* T - Checkmark style */}
          <line
            x1="60"
            y1="25"
            x2="60"
            y2="60"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-[fadeIn_1s_ease-in-out_0.3s_forwards]"
          />
          <line
            x1="50"
            y1="25"
            x2="60"
            y2="35"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-[fadeIn_1s_ease-in-out_0.6s_forwards]"
          />

          {/* G - Checkmark */}
          <polyline
            points="70,50 75,55 85,40"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[dash_1s_ease-in-out_0.9s_forwards]"
          />
        </g>
      </svg>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
