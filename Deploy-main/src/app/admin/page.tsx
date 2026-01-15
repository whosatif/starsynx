"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "@/components/admin/Dashboard";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";

export default function AdminPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication after component mounts
    const checkAuth = () => {
      if (!isAdmin) {
        // Redirect to home page if not authenticated
        router.push("/");
        return;
      }
      setIsLoading(false);
    };

    // Small delay to ensure auth context is properly initialized
    const timer = setTimeout(checkAuth, 100);
    return () => clearTimeout(timer);
  }, [isAdmin, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Verifying access...</p>
        </motion.div>
      </div>
    );
  }

  if (!isAdmin) {
    return null; // This should not render, but just in case
  }

  return <Dashboard />;
}
