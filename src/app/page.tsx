"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserID, getAccCreated } from "@/src/utils/storage";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const u = getUserID();
    const a = getAccCreated();

    if (!u) router.replace("/login");
    else if (a === "0") router.replace("/create-profile");
    else router.replace("/dashboard");
  }, []);

  return <div className=" flex h-screen justify-center items-center">
    <p>Loading...</p>
  </div>;
}
