import About from "@/component/ui/About/About";
import Banner from "@/component/ui/Banner/Banner";
import ProductAbout from "@/component/ui/ProductAbout.tsx/ProductAbout";
import Product from "../../../public/product.json";
import FoodMenu from "@/component/ui/FoodMenu/FoodMenu";
import Chef from "@/component/ui/Chef/Chef";
import BlogHome from "@/component/ui/Blog/BlogHome";
import chef from "../../../public/chef.json";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <div className=" bg-[#343a40] md:flex justify-center items-center gap-8 px-16 py-24 md:mx-10 space-y-16 md:space-y-0 mt-40 rounded-md">
        {Product?.slice(0, 4).map((product) => (
          <ProductAbout key={product?._id} Product={product} />
        ))}
      </div>
      <FoodMenu />
      <div className=" mt-36">
        <Chef chefs={chef} />
      </div>
      <BlogHome />
    </div>
  );
}
