export const useBlog = async () => {
  const res = await fetch(
    `https://zummi-backend.vercel.app/api/v1/get-blogs`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  return res.json()
};
