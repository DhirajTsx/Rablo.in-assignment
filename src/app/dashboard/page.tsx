"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import LogoutButton from "@/src/components/dashboard/LogoutButton";
import StatCard from "@/src/components/dashboard/StatCard";
import UserCard from "@/src/components/dashboard/UserCard";
import { getUserID, getAccCreated } from "@/src/utils/storage";

export default function Dashboard() {
  const [userID, setUserID] = useState<string | null>(null);
  const [acc, setAcc] = useState<string | null>(null);

  useEffect(() => {
    setUserID(getUserID());
    setAcc(getAccCreated());
  }, []);

  if (!userID) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <DashboardHeader />

      <UserCard userID={userID} accCreated={acc} />

      <div className="grid grid-cols-2 gap-4 mt-4">
        <StatCard title="Role" value="Manager" />
        <StatCard title="Profile" value={acc === "1" ? "Complete" : "Pending"} />
      </div>

      <LogoutButton />
    </div>
  );
}
