import React from "react";
import Graph from "../../Graph/Graph";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Graph></Graph>
      <Footer></Footer>
    </div>
  );
};

export default Home;
