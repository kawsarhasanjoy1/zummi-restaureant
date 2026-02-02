export const useGetProduct = async () => {
  const res = await fetch(
    `https://zummi-backend.vercel.app/api/v1/get-products`,
    {
      next: {
        revalidate: 30,
      },
    },
  );
  return res.json();
};
