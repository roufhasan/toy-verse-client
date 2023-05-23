import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "../CategoryCard/CategoryCard";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("marvel");

  useEffect(() => {
    fetch(`https://toy-verse-server-roan.vercel.app/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName);
  };

  return (
    <div className="mt-48">
      <div className="mb-12">
        <h2 className="text-4xl text-center font-semibold mb-6">
          Explore By Category
        </h2>
        <div className="flex justify-center">
          <div className="border-2 border-yellow-400 w-40"></div>
          <div className="border-2 border-blue-500 w-40"></div>
        </div>
      </div>

      <div className="text-center bg-yellow-300 mt-24 rounded">
        <a
          onClick={() => handleTabClick("marvel")}
          className={`tab tab-lifted text-xl font-semibold ${
            activeTab == "marvel" ? "tab-active" : ""
          }`}
        >
          Marvel
        </a>
        <a
          onClick={() => handleTabClick("dc")}
          className={`tab tab-lifted text-xl font-semibold ${
            activeTab == "dc" ? "tab-active" : ""
          }`}
        >
          DC
        </a>
        <a
          onClick={() => handleTabClick("anime")}
          className={`tab tab-lifted text-xl font-semibold ${
            activeTab == "anime" ? "tab-active" : ""
          }`}
        >
          Anime
        </a>
      </div>

      <div className="flex gap-x-4 gap-y-12 flex-col md:flex-row justify-center bg-yellow-50 pb-[3%] pt-[5%]">
        {toys?.map((toy) => (
          <CategoryCard toy={toy} key={toy._id}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
