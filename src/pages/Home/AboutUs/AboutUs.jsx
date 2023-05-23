const AboutUs = () => {
  return (
    <div className="mt-40">
      <div className="mb-12">
        <h2 className="text-4xl text-center font-semibold mb-6">About Us</h2>
        <div className="flex justify-center">
          <div className="border-2 border-yellow-400 w-40"></div>
          <div className="border-2 border-blue-500 w-40"></div>
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Welcome to Toy Verse, your ultimate destination for all things
              play and imagination! We are a premier online toy store dedicated
              to bringing joy, wonder, and endless entertainment to children of
              all ages. With our vast selection of high-quality toys, games, and
              collectibles, we strive to make every playtime a memorable and
              enriching experience.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
