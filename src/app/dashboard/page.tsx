"use client";

import { clearAll, getUserID, getAccCreated } from "@/utils/storage";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div>
      <p>UserID: {getUserID()}</p>
      <p>Role: Manager</p>
      <p>accCreated: {getAccCreated()}</p>

      <button
        onClick={() => {
          clearAll();
          router.replace("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
