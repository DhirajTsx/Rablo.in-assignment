"use client";

import { clearAll } from "@/src/utils/storage";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        clearAll();
        router.replace("/login");
      }}
      className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg mt-6 w-full"
    >
      Logout
    </button>
  );
}
