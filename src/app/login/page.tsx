"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import bg from "@/image/a6ef4a6c68a9adfeda021ae900122039fa31e98a (1).jpg";
import SocialCard from "@/components/login/SocialCard";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"welcome" | "social">("welcome");

  const handleGoogleLogin = () => {
    router.push("/manager?userID=MAN-e44e8b4e-09d2-41e6-9f0b-fbde99ceea20");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">

      <Image
        src={bg}
        fill
        priority
        alt="bg"
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/30 -z-10" />

      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

      {step === "welcome" && (
        <div className="absolute bottom-0 w-full px-6 pb-10 text-white z-10">

          <h1 className="text-[36px] italic font-bold leading-tight">
            Manage Your <br />
            <span className="text-[#9AFF00]">Fitness Centre</span>
            <br /> with us!
          </h1>

          <p className="mt-4 text-[14px] text-white/80 max-w-[90%]">
            All your business operations in one place, ready for you to take charge.
          </p>

          <button
            onClick={() => setStep("social")}
            className="mt-6 w-full rounded-lg bg-[#9AFF00] py-3 text-[14px] font-semibold text-black"
          >
            Get Started
          </button>
        </div>
      )}

      {step === "social" && (
        <SocialCard onGoogle={handleGoogleLogin} />
      )}
    </div>
  );
}
