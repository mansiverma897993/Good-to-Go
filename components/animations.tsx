'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
}: FadeInProps) => {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export const ScaleIn = ({ children, delay = 0, duration = 0.5 }: ScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
}

export const StaggerItem = ({ children }: StaggerItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

interface FloatingProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export const Floating = ({ children, delay = 0, duration = 3 }: FloatingProps) => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ delay, duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

interface PulseAnimationProps {
  children: ReactNode;
  delay?: number;
}

export const PulseAnimation = ({ children, delay = 0 }: PulseAnimationProps) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ delay, duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
};

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'left' | 'right';
}

export const SlideIn = ({ children, delay = 0, direction = 'left' }: SlideInProps) => {
  const initial = direction === 'left' ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 };
  
  return (
    <motion.div
      initial={initial}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* GitHub Logos - Greenish and Darker */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`github-${i}`}
          className="absolute opacity-25 dark:opacity-35 text-green-600/60 dark:text-green-500/50"
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: `${25 * i}%`,
            top: `${20 + i * 15}%`,
            fontSize: `${180 + i * 40}px`,
            filter: 'drop-shadow(0 0 12px rgba(34, 197, 94, 0.4))',
          }}
        >
          🐙
        </motion.div>
      ))}

      {/* Gears - Greenish and Darker */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`gear-${i}`}
          className="absolute opacity-25 dark:opacity-35 text-green-600/60 dark:text-green-500/50"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, -360, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: `${20 * i}%`,
            top: `${30 + i * 10}%`,
            fontSize: `${200 + i * 50}px`,
            filter: 'drop-shadow(0 0 12px rgba(34, 197, 94, 0.4))',
          }}
        >
          ⚙️
        </motion.div>
      ))}
    </div>
  );
};


interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
}

export const HoverScale = ({ children, scale = 1.05 }: HoverScaleProps) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

interface RotateProps {
  children: ReactNode;
  duration?: number;
  direction?: 'clockwise' | 'counterclockwise';
}

export const Rotate = ({
  children,
  duration = 2,
  direction = 'clockwise',
}: RotateProps) => {
  const rotation = direction === 'clockwise' ? 360 : -360;

  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.div>
  );
};

interface PulseProps {
  children: ReactNode;
}

export const Pulse = ({ children }: PulseProps) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
};
