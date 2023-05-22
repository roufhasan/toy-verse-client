const NewsLetter = () => {
  return (
    <div className="my-40">
      <div className="mb-12">
        <h2 className="text-4xl text-center font-semibold mb-6">
          Let&apos;s Stay Connected
        </h2>
        <div className="flex justify-center">
          <div className="border-2 border-yellow-400 w-48"></div>
          <div className="border-2 border-blue-500 w-48"></div>
        </div>
      </div>
      <div className="lg:relative w-full rounded-lg">
        <div>
          <img
            src="https://i.ibb.co/jf4dvxQ/masaaki-komori-Gy4nok-Ykkok-unsplash.jpg"
            alt=""
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg lg:absolute left-[30%] -bottom-12 py-8 px-14 shadow-lg">
          <h2 className="text-3xl font-bold mb-10">
            Do not miss any <span>offer</span> & updates. <br />
            <span className="text-blue-600">Subscribe to the news letter</span>
          </h2>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="py-2 px-4 text-xl text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none mr-2"
            />
            <button className="bg-[#2563eb] text-white py-3 px-7 font-medium hover:shadow-lg rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
