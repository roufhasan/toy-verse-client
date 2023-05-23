import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AllToysRow = ({ toy, index }) => {
  const { sellerName, name, subCategory, price, quantity, _id } = toy;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory.toUpperCase()}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link
          to={`/toy/${_id}`}
          className="btn bg-[#27c8a4] hover:bg-[#21a588] hover:text-white border-0"
        >
          View Details{" "}
          <FaRegArrowAltCircleRight className="ml-2 text-xl"></FaRegArrowAltCircleRight>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
