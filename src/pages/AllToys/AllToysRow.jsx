import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {
  console.log(toy);
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
        <Link to={`/toy/${_id}`} className="btn btn-primary">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
