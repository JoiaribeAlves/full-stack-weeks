"use client";

import Image from "next/image";

const Home = () => {
  return (
    <div className="p-7">
      <Image
        src={"/banner-home-01.png"}
        alt={"Banner: até 55% de desconto esse mês"}
        width={0}
        height={0}
        className="w-full h-auto"
        sizes="100%"
      />
    </div>
  );
};

export default Home;
