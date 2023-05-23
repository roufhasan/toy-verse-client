import { HiOutlinePencilAlt, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysRow = ({ myToy, index }) => {
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
    _id,
  } = myToy;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete This Toy!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-verse-server-roan.vercel.app/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
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
      <td>${price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>{subCategory.toUpperCase()}</td>
      <td>{details.slice(0, 20)}...</td>
      <td>{sellerName}</td>
      <td>{email}</td>
      <td>
        <Link to={`/update/${_id}`}>
          <HiOutlinePencilAlt className="font-bold text-2xl text-blue-500"></HiOutlinePencilAlt>
        </Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)}>
          <HiOutlineX className="font-bold text-2xl text-red-500"></HiOutlineX>
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
