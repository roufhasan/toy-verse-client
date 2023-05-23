import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CategoryCard = ({ toy }) => {
  const { name, photoURL, price, rating, _id } = toy;
  return (
    <div className="max-w-sm md:w-96 bg-base-100 shadow-xl rounded-none">
      <figure>
        <img src={photoURL} alt={name} className="h-96 object-cover" />
      </figure>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center tracking-wider mt-6">
          {name}
        </h2>
        <p className="text-lg text-center font-semibold">${price}</p>
        <p className="text-lg text-center">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            readonly
          />
          <span className="ml-2">({rating})</span>
        </p>

        <button className="btn bg-[#27c8a4] btn-block rounded-none mt-8 border-0 hover:bg-[#129b7d]">
          <Link to={`/toy/${_id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
