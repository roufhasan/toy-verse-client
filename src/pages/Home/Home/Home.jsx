import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div className="mt-12">
      <Banner></Banner>
      <Gallery></Gallery>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
