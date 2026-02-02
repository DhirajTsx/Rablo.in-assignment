import { ManagerProfile, ApiResponse, PatchProfileData } from "../types/types";

const BASE_URL = "/api/proxy"; 

export const api = {
  getProfile: async (managerID: string): Promise<ManagerProfile> => {
    try {
      const res = await fetch(`${BASE_URL}/manager/getBasicProfile/${managerID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });
      
      if (!res.ok) throw new Error("Failed to fetch profile");
      
      const json: ApiResponse = await res.json();
      
      return json.data; 
      
    } catch (error) {
      console.error("API Error (Get):", error);
      throw error;
    }
  },

  createProfile: async (managerID: string, data: PatchProfileData) => {
    try {
      const res = await fetch(`${BASE_URL}/manager/createManagerProfile/${managerID}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to update profile");
      return await res.json();
    } catch (error) {
      console.error("API Error (Patch):", error);
      throw error;
    }
  },
};