import type { Metadata } from "next";

import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Mouses from "./components/Mouses";
import Keyboards from "./components/Keyboards";

export const metadata: Metadata = {
  title: "FSW Store",
};

const Home = () => {
  return (
    <>
      <Banner
        src={[
          "/banner-home-01.png",
          "/banner-home-02.png",
          "/banner-home-03.png",
        ]}
      />

      <div className="px-2 py-6 lg:px-8 lg:py-8">
        <Categories />
      </div>

      <div className="flex flex-col gap-8 pb-24 lg:gap-10">
        <Deals />

        <Mouses />

        <Keyboards />
      </div>
    </>
  );
};

export default Home;
