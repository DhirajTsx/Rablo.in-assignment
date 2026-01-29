const BASE = process.env.NEXT_PUBLIC_API!;

export const getProfile = async (id: string) => {
  const res = await fetch(`${BASE}/manager/getBasicProfile/${id}`);
  if (!res.ok) throw new Error("GET failed");
  return res.json();
};

export const createProfile = async (id: string) => {
  const payload = {
    contactNumber: "9999999999",
    gender: "Male",
    dob: "1990-07-11",
    role: "Manager",
    coordinates: [77.5946, 12.9716],
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    pincode: "560001",
  };

  const res = await fetch(`${BASE}/manager/createManagerProfile/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("PATCH failed");
};
