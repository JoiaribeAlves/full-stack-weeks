import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Mouses from "./components/Mouses";
import Keyboards from "./components/Keyboards";

const Home = async () => {
  return (
    <>
      <Banner
        src="/banner-home-01.png"
        alt="Banner: até 55% de desconto esse mês"
      />

      <Categories />

      <Deals />

      <Banner
        src="/banner-home-02.png"
        alt="Banner: até 55% de desconto em mouses"
      />

      <Mouses />

      <Banner
        src="/banner-home-03.png"
        alt="Banner: até 20% de desconto em fones de ouvido"
      />

      <Keyboards />
    </>
  );
};

export default Home;
