'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, href, delay = 0 }: ServiceCardProps) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden h-full group cursor-pointer"
    >
      {/* Blue corner accent */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>
      
      {/* Icon */}
      <div className="text-cyan-500 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 mb-4 line-clamp-3 group-hover:text-slate-700 transition-colors duration-300">
        {description}
      </p>

      {/* Learn More Link */}
      {href && (
        <div className="flex items-center text-cyan-500 font-semibold group-hover:text-cyan-600 transition-colors duration-300">
          <span className="mr-2">Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
