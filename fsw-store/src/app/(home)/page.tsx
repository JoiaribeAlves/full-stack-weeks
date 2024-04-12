import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Keyboards from "./components/Keyboards";
import Mouses from "./components/Mouses";

const Home = async () => {
  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-7">
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
    </div>
  );
};

export default Home;
