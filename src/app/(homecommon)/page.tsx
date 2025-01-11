"use client";
import About from "@/component/ui/About/About";
import Banner from "@/component/ui/Banner/Banner";
import ProductAbout from "@/component/ui/ProductAbout.tsx/ProductAbout";
import FoodMenu from "@/component/ui/FoodMenu/FoodMenu";
import Chef from "@/component/ui/Chef/Chef";
import BlogHome from "@/component/ui/Blog/BlogHome";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <div>
        <ProductAbout />
      </div>
      <FoodMenu />
      <div className=" mt-36">
        <Chef />
      </div>
      <BlogHome />
    </div>
  );
}
