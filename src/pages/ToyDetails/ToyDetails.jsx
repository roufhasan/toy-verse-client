import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../titleHook/useTitle";

const ToyDetails = () => {
  const randNum = Math.floor(Math.random() * 80) + 1;
  const toy = useLoaderData();
  const {
    name,
    photoURL,
    sellerName,
    email,
    price,
    rating,
    quantity,
    details,
  } = toy;
  useTitle(`ToyDetai's - ${name}`);

  const ratingNum = Number(rating);

  return (
    <div className="mt-12 bg-[#dffdd7] pt-[6%] rounded-lg">
      <h1 className="text-4xl font-bold text-center pb-16 border-b-2 border-black">
        Toy Detail&apos;s
      </h1>
      <div className="md:grid gap-12 grid-cols-6 bg-[#ffffef] p-[2%] rounded-bl-lg rounded-br-lg">
        <h2 className="text-2xl font-bold col-span-6">{name}</h2>
        <div className="col-span-2">
          <img src={photoURL} alt="" className="object-contain rounded-md" />
        </div>
        <div className="space-y-6 w-1/2 col-span-4">
          <div className="space-y-2">
            <p className="text-lg">Seller: {sellerName}</p>
            <div className="flex gap-x-2 items-center">
              <p className="text-lg">
                <Rating
                  placeholderRating={ratingNum}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-yellow-400"></FaStar>
                  }
                  fullSymbol={<FaStar></FaStar>}
                  readonly
                />
              </p>
              <p className="text-xl">{ratingNum}</p>
            </div>
            <Link className="text-lg text-gray-700" to={`mailto:${email}`}>
              Contact: <span className="text-blue-500">{email}</span>
            </Link>
            <div className="divider"></div>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-gray-700">
              <span className="text-red-500 font-normal text-2xl">
                -{randNum}%{" "}
              </span>
              ${price}
            </h3>
            <p className="text-gray-700">In stock: {quantity}</p>
            <div className="divider"></div>
          </div>
          <p className="text-gray-600">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
