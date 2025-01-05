export const getTokenFromLocalStorage = (key: string): string | null => {
  if (typeof window === "undefined") return null; // Check if running on the server
  return localStorage.getItem(key);
};
