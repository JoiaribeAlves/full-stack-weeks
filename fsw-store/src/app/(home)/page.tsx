import Categories from "./components/Categories";
import Banner from "./components/Banner";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-7 lg:p-7">
      <Banner
        src="/banner-home-01.png"
        alt="Banner: até 55% de desconto esse mês"
      />

      <Categories />
    </div>
  );
};

export default Home;
