import { HiOutlinePencilAlt, HiOutlineX } from "react-icons/hi";

const MyToysRow = ({ myToy }) => {
  const {
    photoURL,
    name,
    subCategory,
    sellerName,
    email,
    price,
    rating,
    quantity,
    details,
  } = myToy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{subCategory.toUpperCase()}</td>
      <td>{sellerName}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>{details.slice(0, 20)}</td>
      <td>
        <button>
          <HiOutlinePencilAlt></HiOutlinePencilAlt>
        </button>
      </td>
      <td>
        <button>
          <HiOutlineX></HiOutlineX>
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
