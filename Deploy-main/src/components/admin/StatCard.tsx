'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

export default function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  const changeColors = {
    positive: 'text-green-500',
    negative: 'text-red-500',
    neutral: 'text-slate-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
    >
      {/* Blue corner accent */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-800">{value}</p>
          <p className={`text-sm font-medium ${changeColors[changeType]}`}>
            {change}
          </p>
        </div>
        <div className="text-cyan-500">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
