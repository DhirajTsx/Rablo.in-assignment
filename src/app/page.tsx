"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const storedID = localStorage.getItem("userID");
    const storedAcc = localStorage.getItem("accCreated");

    // Deterministic Routing Logic
    if (!storedID) {
      router.replace("/login");
    } else if (storedAcc === "1") {
      router.replace("/dashboard");
    } else {
      router.replace("/create-profile");
    }
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black"></div>
        <p className="text-gray-500 font-medium">Initializing App...</p>
      </div>
    </div>
  );
}