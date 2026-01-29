"use client";

import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import LogoutButton from "@/src/components/dashboard/LogoutButton";
import StatCard from "@/src/components/dashboard/StatCard";
import UserCard from "@/src/components/dashboard/UserCard";
import { getUserID, getAccCreated } from "@/src/utils/storage";

export default function Dashboard() {
  const userID = getUserID();
  const acc = getAccCreated();

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
