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
