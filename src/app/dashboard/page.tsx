"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/lib/api";
import { ManagerProfile } from "@/lib/types";

//components
import Spinner from "@/components/ui/Spinner";
import InfoRow from "@/components/ui/InfoRow";
import ProfileHeader from "@/components/dashboard/ProfileHeader";
import InfoSection from "@/components/dashboard/InfoSection";

export default function Dashboard() {
  const { logout } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<ManagerProfile | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const storedAcc = localStorage.getItem("accCreated");
      const storedID = localStorage.getItem("userID");

      if (storedAcc !== "1" || !storedID) {
        router.replace("/create-profile");
        return;
      }

      try {
        const data = await api.getProfile(storedID);
        setProfile(data);
      } catch (err) {
        console.error("Dashboard fetch error", err);
      }
    };

    checkAuth();
  }, [router]);

  if (!profile) return <Spinner />;

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <ProfileHeader profile={profile} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoSection title="Personal Details">
            <InfoRow label="Contact Number" value={profile.contactNumber} />
            <InfoRow label="Gender" value={profile.gender} />
            <InfoRow label="Date of Birth" value={profile.dob} />
            <InfoRow
              label="Languages"
              value={
                profile.language.length > 0
                  ? profile.language.join(", ")
                  : "None Listed"
              }
            />
          </InfoSection>

          <InfoSection title="Location">
            <InfoRow
              label="Address"
              value={`${profile.location.city}, ${profile.location.state}`}
            />
            <InfoRow label="Country" value={profile.location.country} />
            <InfoRow label="Pincode" value={profile.location.pincode} />
            <div>
              <span className="text-xs text-gray-800 block">
                GPS Coordinates
              </span>
              <span className="font-mono text-sm bg-black/50 px-2 py-1 rounded inline-block mt-1 border">
                Lat: {profile.location.mapLocation[1]}, Lng:{" "}
                {profile.location.mapLocation[0]}
              </span>
            </div>
          </InfoSection>

          <InfoSection title="System & KYC">
            <div>
              <span className="text-xs text-gray-800 block">
                KYC Verification
              </span>
              {profile.kyc_verification_url ? (
                <a
                  href={profile.kyc_verification_url}
                  target="_blank"
                  className="text-blue-600 text-sm hover:underline break-all"
                >
                  View Document
                </a>
              ) : (
                <span className="text-sm text-gray-500 italic">
                  Not Submitted
                </span>
              )}
            </div>
            <InfoRow
              label="Entity ID"
              value={profile.access_token.entity_id || "N/A"}
            />
            <InfoRow
              label="Token Created"
              value={
                profile.access_token.created_at
                  ? new Date(
                      profile.access_token.created_at,
                    ).toLocaleDateString()
                  : "N/A"
              }
            />
          </InfoSection>
        </div>
      </main>
    </div>
  );
}
