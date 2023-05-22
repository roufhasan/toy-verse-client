import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AllToysRow = ({ toy }) => {
  const { sellerName, name, subCategory, price, quantity, _id } = toy;
  return (
    <tr>
      <td>1</td>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory.toUpperCase()}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link
          to={`/toy/${_id}`}
          className="btn bg-green-400 text-black hover:bg-green-600 hover:text-white border-0"
        >
          View Details{" "}
          <FaRegArrowAltCircleRight className="ml-2 text-xl"></FaRegArrowAltCircleRight>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
