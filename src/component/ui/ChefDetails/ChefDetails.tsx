"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ChefDetails = () => {
  const [counts, setCounts] = useState({
    chefs: 0,
    foodItems: 0,
    experienced: 0,
    happyCustomers: 0,
  }) as any;

  const targetCounts = {
    chefs: 420,
    foodItems: 320,
    experienced: 50,
    happyCustomers: 220,
  } as any;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev: { [x: string]: number }) => {
        const updatedCounts = { ...prev };
        let allReached = true;

        Object.keys(targetCounts).forEach((key: any) => {
          if (prev[key] < targetCounts[key]) {
            updatedCounts[key] += 1; // Increment by 1
            allReached = false;
          }
        });

        if (allReached) clearInterval(interval); // Stop when all targets are reached
        return updatedCounts;
      });
    }, 10); // Speed of counting (adjust for faster/slower animation)

    return () => clearInterval(interval); // Cleanup interval
  }, []);
  return (
    <div className=" mt-48 relative ">
      <div>
        <Image
          className=" w-full md:h-[500px] h-[1000px] object-cover blur-sm border-2 p-2"
          src={
            "https://i.ibb.co.com/FmyYGbP/premium-photo-1678897750441-b7fe348b14a5.jpg"
          }
          height={500}
          width={500}
          alt=""
          quality={100}
          priority
        />
      </div>
      <div className="md:grid grid-cols-4 absolute md:top-[30%] top-20 w-full space-y-4 md:space-y-0">
        <div className="flex flex-col items-center space-y-3">
          <Image
            src="https://html.rrdevs.net/zummi/assets/imgs/happy-client/happy-client-1.svg"
            height={100}
            width={100}
            alt=""
          />
          <p className="text-5xl font-bold">{counts.chefs}</p>
          <p className="font-semibold text-xl uppercase">Professional Chefs</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <Image
            src="https://html.rrdevs.net/zummi/assets/imgs/happy-client/happy-client-2.svg"
            height={100}
            width={100}
            alt=""
          />
          <p className="text-5xl font-bold">{counts.foodItems}</p>
          <p className="font-semibold text-xl uppercase">Items Of Food</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <Image
            src="https://html.rrdevs.net/zummi/assets/imgs/happy-client/happy-client-2.svg"
            height={100}
            width={100}
            alt=""
          />
          <p className="text-5xl font-bold">{counts.experienced}</p>
          <p className="font-semibold text-xl uppercase">Experienced</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <Image
            src="https://html.rrdevs.net/zummi/assets/imgs/happy-client/happy-client-4.svg"
            height={100}
            width={100}
            alt=""
          />
          <p className="text-5xl font-bold">{counts.happyCustomers}</p>
          <p className="font-semibold text-xl uppercase">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;