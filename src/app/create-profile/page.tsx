"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CreateProfile() {
  const { userID, markProfileComplete, accCreated } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (accCreated === 1) router.replace("/dashboard");
  }, [accCreated, router]);

  const [formData, setFormData] = useState({
    contactNumber: "9999999999",
    gender: "Male",
    dob: "1990-07-11",
    role: "Manager",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    pincode: "560001",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userID) return;
    setLoading(true);

    try {
      await api.createProfile(userID, {
        ...formData,
        role: "Manager",
        coordinates: "false" as unknown as number[], 
      });
      markProfileComplete();

      router.replace("/dashboard");
      
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white p-8 shadow-sm rounded-xl border border-gray-200">
        <h1 className="text-2xl font-bold mb-2 text-gray-900">Complete Your Profile</h1>
        <p className="mb-6 text-gray-500 text-sm">Please verify your details to continue to the dashboard.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Contact Number</label>
                <input 
                  className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                  required
                />
             </div>
             <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Date of Birth</label>
                <input 
                  type="date"
                  className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  required
                />
             </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Gender</label>
            <select 
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-black outline-none transition bg-white"
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-5">
             <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">City</label>
                <input className="w-full border border-gray-300 p-2.5 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed" value={formData.city} readOnly />
             </div>
             <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Country</label>
                <input className="w-full border border-gray-300 p-2.5 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed" value={formData.country} readOnly />
             </div>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-4 bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
          >
            {loading ? "Creating Account..." : "Save & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}