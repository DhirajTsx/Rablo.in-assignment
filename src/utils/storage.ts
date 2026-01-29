export const setUserID = (id: string) => {
  localStorage.setItem("userID", id);
  document.cookie = `userID=${id};path=/`;
};

export const setAccCreated = (val: number) => {
  localStorage.setItem("accCreated", String(val));
  document.cookie = `accCreated=${val};path=/`;
};

export const getUserID = () => localStorage.getItem("userID");
export const getAccCreated = () => localStorage.getItem("accCreated");

export const clearAll = () => {
  localStorage.clear();
  document.cookie = "userID=;Max-Age=0";
  document.cookie = "accCreated=;Max-Age=0";
};
