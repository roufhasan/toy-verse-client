import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
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
  return (
    <div className="mt-12 bg-[#F9DBBD] pt-[6%] rounded-lg">
      <h1 className="text-4xl font-bold text-center pb-16 border-b-2 border-black">
        Toy Details
      </h1>
      <div className="md:grid gap-12 grid-cols-6 bg-[#F9DBBD] p-[2%] rounded-lg">
        <h2 className="text-2xl font-bold col-span-6">{name}</h2>
        <div className="col-span-2">
          <img src={photoURL} alt="" className="object-contain rounded-md" />
        </div>
        <div className="space-y-6 w-1/2 col-span-4">
          <div className="space-y-2">
            <p className="text-lg">Seller: {sellerName}</p>
            <p className="text-lg">{rating}</p>
            <Link className="text-lg" to={`mailto:${email}`}>
              Contact: <span className="text-blue-500">{email}</span>
            </Link>
            <div className="divider"></div>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">
              <span className="text-red-500 font-normal text-2xl">-23% </span>$
              {price}
            </h3>
            <p>In stock: {quantity}</p>
            <div className="divider"></div>
          </div>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
