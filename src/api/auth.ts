const BASE = process.env.NEXT_PUBLIC_API!;

export const googleLogin = () => {
  window.location.href = `${BASE}/auth/google/manager`;
};
