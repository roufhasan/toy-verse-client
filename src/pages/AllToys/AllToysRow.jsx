import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {
  console.log(toy);
  const { sellerName, name, subCategory, price, quantity } = toy;
  return (
    <tr>
      <td>1</td>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link toy="" className="btn btn-primary">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
