"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

interface AuthContextType {
  userID: string | null;
  accCreated: number | null;
  isLoading: boolean;
  login: (id: string) => Promise<void>;
  logout: () => void;
  markProfileComplete: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userID, setUserID] = useState<string | null>(null);
  const [accCreated, setAccCreated] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedID = localStorage.getItem("userID");
    const storedAcc = localStorage.getItem("accCreated");

    if (storedID) {
      setUserID(storedID);
      if (storedAcc !== null) setAccCreated(Number(storedAcc));
    }

    setIsLoading(false);
  }, []);

  const login = async (id: string) => {
    setIsLoading(true);
    localStorage.setItem("userID", id);
    setUserID(id);

    try {
      const profile = await api.getProfile(id);
      const rawStatus = profile.accCreated as unknown;

      const status =
        rawStatus === 1 ||
        rawStatus === "1" ||
        rawStatus === true ||
        rawStatus === "true"
          ? 1
          : 0;

      setAccCreated(status);
      localStorage.setItem("accCreated", String(status));

      if (status === 1) {
        router.replace("/dashboard");
      } else {
        router.replace("/create-profile");
      }
    } catch (error) {
      console.error("Login sync failed:", error);
      router.replace("/create-profile");
    } finally {
      setIsLoading(false);
    }
  };

  const markProfileComplete = () => {
    setAccCreated(1);
    localStorage.setItem("accCreated", "1");
    router.replace("/dashboard");
  };

  const logout = () => {
    localStorage.clear();
    setUserID(null);
    setAccCreated(null);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        userID,
        accCreated,
        isLoading,
        login,
        logout,
        markProfileComplete,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
