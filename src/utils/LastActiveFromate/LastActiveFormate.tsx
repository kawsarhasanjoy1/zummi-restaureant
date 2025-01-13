// timeUtils.js - সময় সম্পর্কিত ফাংশনগুলো এখানে রাখা হবে

/**
 * Function to calculate time ago from the given timestamp (updatedAt)
 * @param {string} updatedAt - Timestamp of last activity (ISO string)
 * @returns {string} - Time ago in human-readable format (e.g. "5 minutes ago", "2 hours ago")
 */
export const getTimeAgo = (updatedAt: any) => {
  const now = new Date() as any;
  const lastActivityDate = new Date(updatedAt) as any;
  const diffInSeconds = Math.floor((now - lastActivityDate) / 1000); // সেকেন্ডে পার্থক্য

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else {
    return `${Math.floor(diffInHours / 24)} days ago`;
  }
};
