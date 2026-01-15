"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  MessageSquare,
  MousePointer,
  TrendingUp,
  Eye,
  Clock,
  Activity,
  Shield,
} from "lucide-react";
import StatCard from "./StatCard";
import { useAnalytics } from "@/contexts/AnalyticsContext";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data, updateActiveUsers } = useAnalytics();
  const { logout } = useAuth();
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side only rendering for dynamic content
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Real-time updates for dashboard
  useEffect(() => {
    const interval = setInterval(() => {
      updateActiveUsers();
    }, 5000); // Update every 5 seconds for more responsive feel

    return () => clearInterval(interval);
  }, [updateActiveUsers]);

  // Calculate session duration in minutes
  const sessionDurationMinutes = Math.floor(data.sessionDuration / 60);

  const stats = [
    {
      title: "Total Website Visits",
      value: data.totalVisits.toLocaleString(),
      change: `${data.currentActiveUsers} active users`,
      changeType: "positive" as const,
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Total Page Views",
      value: data.totalPageViews.toLocaleString(),
      change: `${data.sessionData.pageViews} this session`,
      changeType: "positive" as const,
      icon: <Eye className="w-8 h-8" />,
    },
    {
      title: "CTA Button Clicks",
      value: data.ctaClicks.toLocaleString(),
      change: "Real-time tracking",
      changeType: "positive" as const,
      icon: <MousePointer className="w-8 h-8" />,
    },
    {
      title: "Contact Form Submissions",
      value: data.contactFormSubmissions.toLocaleString(),
      change: "Forms completed",
      changeType: "positive" as const,
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      title: "Unique Visitors",
      value: data.uniqueVisitors.toLocaleString(),
      change: "Session based",
      changeType: "neutral" as const,
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Session Duration",
      value: `${sessionDurationMinutes}m`,
      change: "Average time on site",
      changeType: "neutral" as const,
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Active Users Now",
      value: data.currentActiveUsers.toString(),
      change: "Live count",
      changeType: "positive" as const,
      icon: <Activity className="w-8 h-8" />,
    },
    {
      title: "Most Popular Service",
      value: data.mostPopularService,
      change: "Top viewed service",
      changeType: "neutral" as const,
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  const maxVisits = Math.max(...data.visitData.map((d) => d.visits), 1);
  const maxPageViews = Math.max(...data.visitData.map((d) => d.pageViews), 1);

  return (
    <div className="min-h-screen bg-slate-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-between items-start"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Real-Time Analytics Dashboard
            </h1>
            <p className="text-slate-300">
              Monitor your website performance and user engagement in real-time
            </p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
          >
            <Shield className="w-4 h-4" />
            Logout
          </button>
          {isClient && (
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
              <span>Session ID: {data.sessionData.sessionId.slice(-8)}</span>
              <span>•</span>
              <span>
                Started:{" "}
                {new Date(data.sessionData.startTime).toLocaleTimeString()}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Activity className="w-4 h-4" />
                Live Data
              </span>
            </div>
          )}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Visits Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>

            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Daily Visits (Real-time)
            </h3>

            <div className="flex items-end justify-between h-64 space-x-2">
              {data.visitData.map((dayData, index) => (
                <motion.div
                  key={dayData.day}
                  initial={{ height: 0 }}
                  animate={{ height: `${(dayData.visits / maxVisits) * 100}%` }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="flex-1 bg-cyan-400 rounded-t-lg min-h-[20px] relative group cursor-pointer"
                >
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <div>{dayData.visits} visits</div>
                    <div>{dayData.pageViews} page views</div>
                  </div>

                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 text-sm font-medium">
                    {dayData.day}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Page Views Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-8 h-8 bg-green-400 rounded-br-xl"></div>

            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Daily Page Views
            </h3>

            <div className="flex items-end justify-between h-64 space-x-2">
              {data.visitData.map((dayData, index) => (
                <motion.div
                  key={`pageviews-${dayData.day}`}
                  initial={{ height: 0 }}
                  animate={{
                    height: `${(dayData.pageViews / maxPageViews) * 100}%`,
                  }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="flex-1 bg-green-400 rounded-t-lg min-h-[20px] relative group cursor-pointer"
                >
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {dayData.pageViews} views
                  </div>

                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 text-sm font-medium">
                    {dayData.day}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-8 h-8 bg-purple-400 rounded-br-xl"></div>

            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Top Pages (Real-time)
            </h3>

            <div className="space-y-4">
              {data.topPages.slice(0, 5).map((page, index) => (
                <motion.div
                  key={page.page}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">{page.page}</p>
                    <p className="text-sm text-slate-600">{page.views} views</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-purple-600">
                      {page.percentage}%
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>

            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Recent Activity (Live)
            </h3>

            <div className="space-y-4 max-h-80 overflow-y-auto">
              {data.recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-4 p-3 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-slate-800">{activity.action}</p>
                    <p className="text-slate-500 text-sm">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
              {data.recentActivity.length === 0 && (
                <p className="text-slate-500 text-center py-8">
                  No recent activity yet. Start browsing to see real-time
                  updates!
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
