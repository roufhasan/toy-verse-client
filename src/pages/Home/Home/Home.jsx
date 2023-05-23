import useTitle from "../../../titleHook/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  useTitle("Home");
  return (
    <div className="mt-12">
      <Banner></Banner>
      <Gallery></Gallery>
      <AboutUs></AboutUs>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
