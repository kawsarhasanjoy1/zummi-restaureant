export const removeFromLocalStorage = (key: string) => {
  if (key) {
  return  localStorage.removeItem(key);
  }
};
