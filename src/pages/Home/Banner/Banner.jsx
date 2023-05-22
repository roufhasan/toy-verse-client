import { Link } from "react-router-dom";
import bannerBg from "../../../assets/img/banner-bg.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerBg})`,
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="min-h-[82vh] rounded mt-4"
    >
      <div className="bg-gradient-to-bl from-[#151515] to-[rgba(21, 21, 21,0.5)] h-full flex flex-col md:items-end justify-center  space-y-4 md:px-12 px-4 rounded">
        <h1 className="text-2xl text-yellow-400 font-semibold">
          Exclusive Sale On Toy Verse
        </h1>
        <h2 className="text-5xl text-white font-bold">
          Action Figures & Gift Shop
        </h2>
        <h4 className="text-xl text-white font-medium">
          Get Up To <span className="text-yellow-400">30% Off</span> Available
        </h4>
        <div>
          <Link to="/allToys" className="btn btn-warning">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
