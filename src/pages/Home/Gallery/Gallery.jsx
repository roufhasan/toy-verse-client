const Gallery = () => {
  return (
    <div className="mt-40">
      <div className="mb-12">
        <h2 className="text-4xl text-center font-semibold mb-6">
          Our Latest Toys Gallery
        </h2>
        <div className="flex justify-center">
          <div className="border-2 border-yellow-400 w-40"></div>
          <div className="border-2 border-blue-500 w-40"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <img
            src="https://i.ibb.co/51sncs1/batman.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1">
          <img src="https://i.ibb.co/GxdxmFb/goku.jpg" alt="" />
        </div>
        <div className="col-span-1">
          <img src="https://i.ibb.co/wLd1DMh/buzz.jpg" alt="" />
        </div>
        <div className="col-span-1">
          <img src="https://i.ibb.co/tKQfdyw/spiderman.jpg" alt="" />
        </div>
        <div className="col-span-1">
          <img
            src="https://i.ibb.co/cDzN71W/joseph-costa-TWhw4dr1g-Mw-unsplash.jpg"
            alt=""
            className="h-full object-cover"
          />
        </div>
        <div className="col-span-1 hidden md:block">
          <img src="https://i.ibb.co/Zd4ycf6/ironman.jpg" alt="" />
        </div>
        <div className="col-span-2">
          <img
            src="https://i.ibb.co/85tcTNX/robot.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
