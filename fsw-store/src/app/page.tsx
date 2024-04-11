"use client";

import { useSession } from "next-auth/react";

const Home = () => {
  const {data} = useSession();

  return <h1>Olá, {data?.user?.name}</h1>;
};

export default Home;
