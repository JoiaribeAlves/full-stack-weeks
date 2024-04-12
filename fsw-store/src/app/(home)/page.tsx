import Image from "next/image";
import Categories from "./components/Categories";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-7 lg:p-7">
      <Image
        src={"/banner-home-01.png"}
        alt={"Banner: até 55% de desconto esse mês"}
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100%"
      />

      <Categories />
    </div>
  );
};

export default Home;
