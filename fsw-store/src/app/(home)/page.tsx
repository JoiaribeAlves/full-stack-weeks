import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Mouses from "./components/Mouses";
import Keyboards from "./components/Keyboards";

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

      <Categories />

      <Deals />

      <Mouses />

      <Keyboards />
    </>
  );
};

export default Home;
