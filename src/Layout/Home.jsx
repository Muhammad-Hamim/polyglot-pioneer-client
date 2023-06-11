import { Helmet } from "react-helmet-async";
import Hero from "../Pages/Home/Hero/Hero";
import TopCategory from "../Pages/Home/TopCategory/TopCategory";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PPA | Home</title>
      </Helmet>
      <div className="dark:bg-gray-900">
        <Hero></Hero>
        <TopCategory></TopCategory>
      </div>
    </>
  );
};

export default Home;
