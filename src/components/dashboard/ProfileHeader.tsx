import Image from "next/image";
import { ManagerProfile } from "@/lib/types";

export default function ProfileHeader({
  profile,
}: {
  profile: ManagerProfile;
}) {
  const onLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
      <div className="h-28 w-28 shrink-0 rounded-full bg-gray-100 p-1 border border-gray-200">
        <div className="h-full w-full rounded-full overflow-hidden relative">
          <Image
            src={profile.profilePicture}
            alt="Profile"
            width={112}
            height={112}
            className="object-cover h-full w-full"
            priority
          />
        </div>
      </div>
      <div className="text-center md:text-left flex-1">
        <h1 className="text-3xl font-bold text-gray-900">{profile.fullName}</h1>
        <p className="text-gray-500 font-medium">{profile.email}</p>
        <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
          <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold border border-blue-100">
            {profile.role}
          </span>
          <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-semibold border border-green-100">
            Active ({profile.accCreated})
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-mono border border-gray-200">
            ID: {profile.ID}
          </span>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
}
