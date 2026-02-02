"use client";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function ManagerLogic() {
  const searchParams = useSearchParams();
  const { login } = useAuth();

  useEffect(() => {
    const userID = searchParams.get("userID");
    if (userID) {
      login(userID);
    }
  }, [searchParams, login]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Authenticating...</h2>
        <p className="text-gray-500">Please wait while we fetch your profile.</p>
      </div>
    </div>
  );
}

export default function ManagerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ManagerLogic />
    </Suspense>
  );
}