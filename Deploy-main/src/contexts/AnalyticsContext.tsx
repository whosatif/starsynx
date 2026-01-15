"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

interface AnalyticsData {
  totalVisits: number;
  totalPageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  currentActiveUsers: number;
  ctaClicks: number;
  contactFormSubmissions: number;
  mostPopularService: string;
  visitData: { day: string; visits: number; pageViews: number }[];
  recentActivity: { time: string; action: string; id: string }[];
  topPages: { page: string; views: number; percentage: number }[];
  sessionData: {
    sessionId: string;
    startTime: number;
    lastActivity: number;
    pageViews: number;
    referrer: string;
  };
}

interface AnalyticsContextType {
  data: AnalyticsData;
  trackPageVisit: (page: string) => void;
  trackCTAClick: (cta: string) => void;
  trackFormSubmission: () => void;
  trackServiceView: (service: string) => void;
  updateActiveUsers: () => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
);

// Helper function to generate unique ID
const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).substr(2);

// Helper function to generate session ID
const generateSessionId = () => {
  return (
    "session_" +
    Date.now().toString(36) +
    "_" +
    Math.random().toString(36).substr(2)
  );
};

// Helper function to get current day name
const getCurrentDay = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[new Date().getDay()];
};

const initialData: AnalyticsData = {
  totalVisits: 0,
  totalPageViews: 0,
  uniqueVisitors: 0,
  sessionDuration: 0,
  currentActiveUsers: 1,
  ctaClicks: 0,
  contactFormSubmissions: 0,
  mostPopularService: "Web Development",
  visitData: [
    { day: "Mon", visits: 0, pageViews: 0 },
    { day: "Tue", visits: 0, pageViews: 0 },
    { day: "Wed", visits: 0, pageViews: 0 },
    { day: "Thu", visits: 0, pageViews: 0 },
    { day: "Fri", visits: 0, pageViews: 0 },
    { day: "Sat", visits: 0, pageViews: 0 },
    { day: "Sun", visits: 0, pageViews: 0 },
  ],
  recentActivity: [],
  topPages: [
    { page: "/", views: 0, percentage: 0 },
    { page: "/about", views: 0, percentage: 0 },
    { page: "/services", views: 0, percentage: 0 },
    { page: "/contact", views: 0, percentage: 0 },
  ],
  sessionData: {
    sessionId: generateSessionId(),
    startTime: Date.now(),
    lastActivity: Date.now(),
    pageViews: 0,
    referrer: typeof window !== "undefined" ? document.referrer : "",
  },
};

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AnalyticsData>(initialData);

  // Initialize session and load data from localStorage on mount
  useEffect(() => {
    const initializeAnalytics = () => {
      // Check if this is a new session
      const lastActivity = localStorage.getItem("lastActivity");
      const sessionTimeout = 30 * 60 * 1000; // 30 minutes
      const now = Date.now();

      let isNewSession = true;
      let sessionId = generateSessionId();

      if (lastActivity && now - parseInt(lastActivity) < sessionTimeout) {
        // Continue existing session
        const existingSessionId = localStorage.getItem("sessionId");
        if (existingSessionId) {
          sessionId = existingSessionId;
          isNewSession = false;
        }
      }

      // Load existing data or create initial data
      const savedData = localStorage.getItem("analyticsData");
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setData({
            ...parsedData,
            sessionData: {
              ...parsedData.sessionData,
              sessionId,
              lastActivity: now,
            },
            currentActiveUsers: Math.max(1, parsedData.currentActiveUsers || 1),
          });
        } catch (error) {
          console.error("Failed to parse analytics data:", error);
          setData((prev) => ({
            ...prev,
            sessionData: { ...prev.sessionData, sessionId, lastActivity: now },
          }));
        }
      } else {
        // First time visitor
        setData((prev) => ({
          ...prev,
          sessionData: {
            sessionId,
            startTime: now,
            lastActivity: now,
            pageViews: 0,
            referrer: typeof window !== "undefined" ? document.referrer : "",
          },
        }));
      }

      // Store session info
      localStorage.setItem("sessionId", sessionId);
      localStorage.setItem("lastActivity", now.toString());

      // Track new visitor if new session
      if (isNewSession) {
        setData((prev) => ({
          ...prev,
          uniqueVisitors: prev.uniqueVisitors + 1,
          totalVisits: prev.totalVisits + 1,
        }));
      }
    };

    initializeAnalytics();

    // Real-time active users simulation - more realistic
    const activeUsersInterval = setInterval(() => {
      setData((prev) => {
        // Simulate realistic user activity patterns
        const hour = new Date().getHours();
        let baseUsers = 1;

        // Business hours simulation
        if (hour >= 9 && hour <= 17) {
          baseUsers = Math.floor(Math.random() * 8) + 3; // 3-10 users during business hours
        } else if (hour >= 18 && hour <= 22) {
          baseUsers = Math.floor(Math.random() * 5) + 2; // 2-6 users in evening
        } else {
          baseUsers = Math.floor(Math.random() * 3) + 1; // 1-3 users at night
        }

        return {
          ...prev,
          currentActiveUsers: baseUsers,
        };
      });
    }, 15000); // Update every 15 seconds for more real-time feel

    // Real-time session duration update
    const sessionInterval = setInterval(() => {
      const sessionStartTime = localStorage.getItem("sessionStartTime");
      if (sessionStartTime) {
        const duration = Date.now() - parseInt(sessionStartTime);
        setData((prev) => ({
          ...prev,
          sessionDuration: Math.floor(duration / 1000), // in seconds
        }));
      }

      // Update last activity timestamp
      localStorage.setItem("lastActivity", Date.now().toString());
    }, 1000); // Update every second

    // Simulate real-time activity
    const activityInterval = setInterval(() => {
      const activities = [
        "New visitor from Google",
        "User downloaded service guide",
        "Contact form viewed",
        "Service page engagement",
        "Newsletter signup",
        "WhatsApp button clicked",
      ];

      // Random chance of activity (30% every 20 seconds)
      if (Math.random() < 0.3) {
        const randomActivity =
          activities[Math.floor(Math.random() * activities.length)];
        const timeString = new Date().toLocaleTimeString();

        setData((prev) => ({
          ...prev,
          recentActivity: [
            {
              time: timeString,
              action: randomActivity,
              id: generateId(),
            },
            ...prev.recentActivity.slice(0, 9),
          ],
        }));
      }
    }, 20000); // Check for new activity every 20 seconds

    return () => {
      clearInterval(activeUsersInterval);
      clearInterval(sessionInterval);
      clearInterval(activityInterval);
    };
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("analyticsData", JSON.stringify(data));
    localStorage.setItem("lastActivity", Date.now().toString());
  }, [data]);

  const trackPageVisit = useCallback((page: string) => {
    const timeString = new Date().toLocaleTimeString();
    const currentDay = getCurrentDay();

    setData((prev) => {
      // Update page views count for top pages
      const updatedTopPages = prev.topPages.map((p) =>
        p.page === page ? { ...p, views: p.views + 1 } : p
      );

      // If page not in top pages, add it
      if (!updatedTopPages.find((p) => p.page === page)) {
        updatedTopPages.push({ page, views: 1, percentage: 0 });
      }

      // Calculate percentages
      const totalPageViews = updatedTopPages.reduce(
        (sum, p) => sum + p.views,
        0
      );
      updatedTopPages.forEach((p) => {
        p.percentage =
          totalPageViews > 0 ? Math.round((p.views / totalPageViews) * 100) : 0;
      });

      // Sort by views and keep top 10
      updatedTopPages.sort((a, b) => b.views - a.views);
      const topTenPages = updatedTopPages.slice(0, 10);

      return {
        ...prev,
        totalPageViews: prev.totalPageViews + 1,
        visitData: prev.visitData.map((day) =>
          day.day === currentDay
            ? { ...day, pageViews: day.pageViews + 1 }
            : day
        ),
        topPages: topTenPages,
        sessionData: {
          ...prev.sessionData,
          pageViews: prev.sessionData.pageViews + 1,
          lastActivity: Date.now(),
        },
        recentActivity: [
          {
            time: timeString,
            action: `Page visited: ${page}`,
            id: generateId(),
          },
          ...prev.recentActivity.slice(0, 9), // Keep only last 10 activities
        ],
      };
    });
  }, []);

  const trackCTAClick = useCallback((cta: string) => {
    const timeString = new Date().toLocaleTimeString();

    setData((prev) => ({
      ...prev,
      ctaClicks: prev.ctaClicks + 1,
      recentActivity: [
        {
          time: timeString,
          action: `CTA clicked: ${cta}`,
          id: generateId(),
        },
        ...prev.recentActivity.slice(0, 9),
      ],
    }));
  }, []);

  const trackFormSubmission = useCallback(() => {
    const timeString = new Date().toLocaleTimeString();

    setData((prev) => ({
      ...prev,
      contactFormSubmissions: prev.contactFormSubmissions + 1,
      recentActivity: [
        {
          time: timeString,
          action: "New contact form submission received",
          id: generateId(),
        },
        ...prev.recentActivity.slice(0, 9),
      ],
    }));
  }, []);

  const trackServiceView = useCallback((service: string) => {
    const timeString = new Date().toLocaleTimeString();

    setData((prev) => ({
      ...prev,
      recentActivity: [
        {
          time: timeString,
          action: `Service page viewed: ${service}`,
          id: generateId(),
        },
        ...prev.recentActivity.slice(0, 9),
      ],
    }));
  }, []);

  const updateActiveUsers = useCallback(() => {
    setData((prev) => ({
      ...prev,
      currentActiveUsers: Math.max(1, Math.floor(Math.random() * 10) + 1),
    }));
  }, []);

  return (
    <AnalyticsContext.Provider
      value={{
        data,
        trackPageVisit,
        trackCTAClick,
        trackFormSubmission,
        trackServiceView,
        updateActiveUsers,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
}
