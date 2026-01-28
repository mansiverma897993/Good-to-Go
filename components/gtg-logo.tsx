"use client"

export function GtgLogo() {
  return (
    <div 
      className="relative w-11 h-11 flex items-center justify-center animate-spin" 
      style={{ animationDuration: '20s' }}
    >
      {/* Main logo container with gradient */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-10 h-10 drop-shadow-lg" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#15803d', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#86efac', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Outer circular frame */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.3" />

        {/* Main body - octopus head */}
        <circle cx="50" cy="38" r="24" fill="url(#logoGradient)" />

        {/* Eyes - bright and expressive */}
        <circle cx="40" cy="35" r="5" fill="white" />
        <circle cx="60" cy="35" r="5" fill="white" />
        
        {/* Eye pupils */}
        <circle cx="41" cy="36" r="2.5" fill="#16a34a" />
        <circle cx="61" cy="36" r="2.5" fill="#16a34a" />

        {/* Smiling mouth - curved and friendly */}
        <path 
          d="M 45 42 Q 50 44 55 42" 
          fill="none" 
          stroke="white" 
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Main tentacles - 4 curvy ones */}
        {/* Top-left tentacle */}
        <path
          d="M 35 58 Q 25 72 20 88 Q 18 93 24 94 Q 28 94 28 88"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Top-right tentacle */}
        <path
          d="M 65 58 Q 75 72 80 88 Q 82 93 76 94 Q 72 94 72 88"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Bottom-left tentacle */}
        <path
          d="M 42 61 Q 32 76 28 92 Q 26 97 32 97 Q 36 96 36 90"
          fill="none"
          stroke="url(#accentGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Bottom-right tentacle */}
        <path
          d="M 58 61 Q 68 76 72 92 Q 74 97 68 97 Q 64 96 64 90"
          fill="none"
          stroke="url(#accentGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Accent dots on tentacles */}
        <circle cx="25" cy="75" r="1.5" fill="url(#accentGradient)" opacity="0.6" />
        <circle cx="75" cy="75" r="1.5" fill="url(#accentGradient)" opacity="0.6" />
        <circle cx="35" cy="80" r="1.5" fill="url(#accentGradient)" opacity="0.6" />
        <circle cx="65" cy="80" r="1.5" fill="url(#accentGradient)" opacity="0.6" />

        {/* Glow effect circle */}
        <circle 
          cx="50" 
          cy="38" 
          r="26" 
          fill="none" 
          stroke="url(#accentGradient)" 
          strokeWidth="1" 
          opacity="0.2"
        />
      </svg>

      {/* Subtle pulsing glow */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 animate-pulse"
        style={{ filter: 'blur(8px)', zIndex: -1 }}
      />
    </div>
  )
}
