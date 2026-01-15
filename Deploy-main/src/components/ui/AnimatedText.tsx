'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
}

export default function AnimatedText({ 
  children, 
  variant = 'p', 
  className = '', 
  delay = 0 
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {variant === 'h1' && <h1 className={className}>{children}</h1>}
      {variant === 'h2' && <h2 className={className}>{children}</h2>}
      {variant === 'h3' && <h3 className={className}>{children}</h3>}
      {variant === 'p' && <p className={className}>{children}</p>}
    </motion.div>
  );
}
