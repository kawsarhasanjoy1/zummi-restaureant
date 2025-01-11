import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";
import { formatDate } from "@/utils/FormateDate/FormateDate";
import { useGetAllUserQuery } from "@/redux/api/userApi";

const DetailsReview = ({ product }: { product: any }) => {
  const { data } = useGetAllUserQuery(undefined);
  const userInfo = product?.reviews?.flatMap((item: any) => {
    // Filter the user based on the userId
    const userFilter: any = data?.data?.filter(
      (user: any) => user?._id === item?.user
    );
    const reviewFilter = product?.reviews?.filter(
      (user: any) => user?.user === item?.user
    );

    return userFilter?.map((user: any) => {
      return {
        user,
        reviews: reviewFilter,
      };
    });
  });
  
  return (
    <section className=" py-10 md:py-0 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div className="w-full">
        
          <div className=" gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div className="p-10 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
              <h2 className="font-manrope font-bold text-5xl text-amber-400 mb-6">
                {}
              </h2>
              <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={product?.averageRating}
                  readOnly
                />
              </div>
              <p className="font-medium text-xl leading-8 text-gray-900 text-center">
                {product?.ratingQuantity} Ratings
              </p>
            </div>
          </div>

          <div>
            {userInfo?.map((user,index) => {
              return (
                <div
                  key={index}
                  className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto"
                >
                  <div className="flex  flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={user?.user?.image ? user?.user?.image : 'https://i.ibb.co.com/WsrL60p/20240905-143900.jpg'}
                        alt="John image"
                        width={400}
                        height={400}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className=" flex flex-col space-y-3 items-start justify-center">
                        <Rating
                          value={5}
                          readOnly
                          style={{ maxWidth: 180, gap: 10 }}
                        />
                        <h6 className="font-semibold text-lg leading-8 text-indigo-600 ">
                          {user?.user?.name}
                        </h6>
                      </div>
                    </div>
                    <div className="font-normal text-lg leading-8 text-gray-400">
                      {user?.reviews?.map((review) => {
                        return (
                          <div key={review?._id}>
                            {formatDate(
                              review?.createdAt ? review?.createdAt : "2025-01-05T01:55:48.788Z"
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">
                    {user?.reviews?.map((review) => {
                      return <div key={review?._id}>{review?.review}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsReview;
