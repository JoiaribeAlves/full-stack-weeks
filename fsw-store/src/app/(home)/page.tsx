import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Keyboards from "./components/Keyboards";

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

      <Keyboards />
    </div>
  );
};

export default Home;
