import Button from "@/component/Button/Button";
import CommonDesign from "@/component/Common/CommonDesign";
import Image from "next/image";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const About = () => {
  return (
    <div className=" md:grid grid-cols-2 gap-16 pt-24 px-4 relative">
      <div className=" md:relative md:flex justify-end">
        <Image
          className=" md:h-[350px] md:w-[300px] w-full object-cover md:absolute top-[40%] left-40 z-10"
          src={
            "https://html.rrdevs.net/zummi/assets/imgs/about-us/about-us-2.jpg"
          }
          width={400}
          height={500}
          quality={100}
          priority
          alt=""
        />
        <Image
          className=" md:h-[450px] md:w-[350px] w-full md:mt-0 mt-8 object-cover"
          src={
            "https://i.ibb.co.com/Pt7YKXJ/premium-photo-1661883237884-263e8de8869b.jpg"
          }
          width={550}
          height={400}
          quality={100}
          priority
          alt=""
        />
      </div>
      <div className=" md:mt-0 mt-8 font-[Poppins]">
        <div>
          <CommonDesign>Our Background</CommonDesign>
        </div>
        <div className=" space-y-8 mt-4">
          <p className=" text-5xl font-[Poppins] uppercase">
            Simply Flawless! Deliciously Fresh & Lush Flavors.
          </p>
          <p className=" text-sm font-[Poppins]">
            Praesent varius erat ut pulvinar consectetur. Vivamus euismod luctus
            ligula, facilisis dignissim lacus. Maecenas eleifend rhoncus justo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            zestibulum ex, a fermentum magna sodales nec.
          </p>
          <p className=" text-sm font-[Poppins]">
            Nunc vitae lacinia dui. Duis elementum ipsum quam, vel semper nisl
            venenatis eget. Ut rutrum dapibus dui quis tincidunt. luctus et
            ultrices posuere cubilia curae.Donec sodales leo nisi, ac
            scelerisque elit sollicitudin et.
          </p>
        </div>
        <div className=" md:flex items-center gap-10 mt-8 space-y-8 md:space-y-0">
          <div>
            <Button>read more</Button>
          </div>
          <div className=" flex items-center gap-5">
            <div className=" bg-[#767676] h-14 w-14 flex justify-center items-center">
              {" "}
              <FiPhoneCall />
            </div>
            <div>
              <p>Call us:</p>
              <p className=" text-xl font-bold">+888 578 754 547</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute flex justify-between w-full ">
        <Image
          className="animate-slowBounce hidden md:block"
          src={"https://i.ibb.co.com/J7ywFTt/shape-1.png"}
          width={100}
          height={100}
          quality={100}
          alt="tomato"
        />
        <Image
          className="animate-slowBounce hidden md:block"
          src={"https://i.ibb.co.com/wNFQT5z/shape-2.png"}
          width={100}
          height={100}
          quality={100}
          alt="shape"
        />
      </div>
    </div>
  );
};

export default About;
