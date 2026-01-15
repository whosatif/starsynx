"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Session timeout: 30 minutes
const SESSION_TIMEOUT = 30 * 60 * 1000;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in and session is valid
  useEffect(() => {
    const checkAuthStatus = () => {
      const adminStatus = localStorage.getItem("isAdmin");
      const loginTime = localStorage.getItem("adminLoginTime");

      if (adminStatus === "true" && loginTime) {
        const currentTime = Date.now();
        const sessionAge = currentTime - parseInt(loginTime);

        if (sessionAge < SESSION_TIMEOUT) {
          setIsAdmin(true);
          // Update the login time to extend session
          localStorage.setItem("adminLoginTime", currentTime.toString());
        } else {
          // Session expired, logout
          logout();
        }
      }

      setIsLoading(false);
    };

    checkAuthStatus();

    // Check session every minute
    const sessionCheckInterval = setInterval(() => {
      if (isAdmin) {
        const loginTime = localStorage.getItem("adminLoginTime");
        if (loginTime) {
          const sessionAge = Date.now() - parseInt(loginTime);
          if (sessionAge >= SESSION_TIMEOUT) {
            logout();
          }
        }
      }
    }, 60000); // Check every minute

    return () => clearInterval(sessionCheckInterval);
  }, [isAdmin]);

  const login = (password: string): boolean => {
    // Use a more secure password - change this in production
    const adminPassword = "starsynx@admin2024";

    if (password === adminPassword) {
      const currentTime = Date.now();
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("adminLoginTime", currentTime.toString());
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminLoginTime");
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
