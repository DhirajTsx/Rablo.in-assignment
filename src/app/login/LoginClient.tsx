"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthLayout from "@/src/components/AuthLayout";
import WelcomeCard from "@/src/components/WelcomeCard";
import SocialCard from "@/src/components/SocialCard";
import { googleLogin } from "@/src/api/auth";
import { getProfile } from "@/src/api/profile";
import { setUserID, setAccCreated } from "@/src/utils/storage";

export default function LoginClient() {
  const [screen, setScreen] = useState<"welcome" | "social">("welcome");

  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const id = params.get("userID");
    if (!id) return;

    setUserID(id);

    getProfile(id).then((res) => {
      setAccCreated(res.accCreated);
      router.replace(res.accCreated ? "/dashboard" : "/create-profile");
    });
  }, []);

  return (
    <AuthLayout>
      {screen === "welcome" ? (
        <WelcomeCard onNext={() => setScreen("social")} />
      ) : (
        <SocialCard onGoogle={googleLogin} />
      )}
    </AuthLayout>
  );
}
