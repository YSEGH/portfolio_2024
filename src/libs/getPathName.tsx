export const getPathName = (): string | null => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return null;
};
