import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Deals from "./components/Deals";

const Home = async () => {
  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-7 lg:p-7">
      <Banner
        src="/banner-home-01.png"
        alt="Banner: até 55% de desconto esse mês"
      />

      <Categories />

      <Deals />
    </div>
  );
};

export default Home;
