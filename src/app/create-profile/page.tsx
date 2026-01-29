"use client";

import { useEffect, useState } from "react";
import { createProfile } from "@/src/api/profile";
import ProfileHeader from "@/src/components/create-profile/ProfileHeader";
import ProfileInput from "@/src/components/create-profile/ProfileInput";
import ProfileSubmit from "@/src/components/create-profile/ProfileSubmit";
import { getUserID, setAccCreated } from "@/src/utils/storage";
import { useRouter } from "next/navigation";

export default function CreateProfile() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userID, setUserID] = useState<string | null>(null);

  useEffect(() => {
    setUserID(getUserID());
  }, []);

  const submit = async () => {
    if (!userID || loading) return;

    try {
      setLoading(true);
      await createProfile(userID);
      setAccCreated(1);
      router.replace("/dashboard");
    } catch (err) {
      alert("Profile creation failed");
    } finally {
      setLoading(false);
    }
  };

  if (!userID) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black p-4">
      <ProfileHeader />

      <div className="bg-white rounded-xl p-4 shadow space-y-3">
        <ProfileInput placeholder="Contact Number" type="tel" />
        <ProfileInput placeholder="Gender" />
        <ProfileInput placeholder="Date of Birth" type="date" />
        <ProfileInput placeholder="City" />
        <ProfileInput placeholder="State" />
        <ProfileInput placeholder="Country" />
        <ProfileInput placeholder="Pincode" />
      </div>

      <ProfileSubmit onSubmit={submit} loading={loading} />
    </div>
  );
}
