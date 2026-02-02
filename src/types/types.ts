export interface ManagerLocation {
  mapLocation: number[];
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface AccessToken {
  entity_id: string;
  id: string;
  valid_till: string | null;
  created_at: string | null;
}

export interface ManagerProfile {
  ID: string;
  fullName: string;
  contactNumber: string;
  email: string;
  gender: string;
  profilePicture: string;
  dob: string;
  role: string;
  location: ManagerLocation;
  accCreated: number;
  language: string[]; 
  access_token: AccessToken;
  kyc_verification_url: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: ManagerProfile;
}

export interface PatchProfileData {
  contactNumber: string;
  gender: string;
  dob: string;
  role: "Manager";
  coordinates: number[];
  city: string;
  state: string;
  country: string;
  pincode: string;
}