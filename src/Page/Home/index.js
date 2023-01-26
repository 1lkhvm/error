import React from "react";
import CardSection2 from "../../Components/CardSection2";
import HomeSection1 from "../../Components/HomeSection1";
import Navbar from "../../Layouts/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HomeSection1 />
      <CardSection2 />
    </>
  );
}

export default Home;
