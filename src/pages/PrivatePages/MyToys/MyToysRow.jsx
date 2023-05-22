import { HiOutlinePencilAlt, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };

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
        <Link to={`/update/${_id}`}>
          <HiOutlinePencilAlt></HiOutlinePencilAlt>
        </Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)}>
          <HiOutlineX></HiOutlineX>
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
