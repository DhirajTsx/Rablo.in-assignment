"use client";

import { createProfile } from "@/api/profile";
import { getUserID, setAccCreated } from "@/utils/storage";
import { useRouter } from "next/navigation";

export default function CreateProfile() {
  const router = useRouter();

  const submit = async () => {
    await createProfile(getUserID()!);
    setAccCreated(1);
    router.replace("/dashboard");
  };

  return <button onClick={submit}>Complete Profile</button>;
}
