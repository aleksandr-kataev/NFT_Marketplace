import type { NextPage } from "next";
import { useState } from "react";
import NavBar from "../components/navBar/NavBar";

const Home: NextPage = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  return (
    <>
      <NavBar authorized={authorized} />
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </>
  );
};

export default Home;
