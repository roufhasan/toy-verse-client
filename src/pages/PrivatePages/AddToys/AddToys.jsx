import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../titleHook/useTitle";
import { useNavigate } from "react-router-dom";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Add Toy");

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const photoURL = form.photoURL.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = user?.email;
    const subCategory = form.subCategory.value;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const addedToy = {
      photoURL,
      name,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      quantity,
      details,
    };

    fetch("https://toy-verse-server-roan.vercel.app/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New Toy Have Been Added",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/myToys");
        }
      });
  };

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Add New Toy</h2>
      <div>
        <form
          onSubmit={handleAddToy}
          className="grid grid-cols-6 gap-x-4 gap-y-8"
        >
          <div className="form-control col-span-6 md:col-span-3">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              readOnly={user.displayName ? true : false}
              placeholder="Seller Name"
              required
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded bg-yellow-100"
            />
          </div>
          <div className="form-control col-span-6 md:col-span-3">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              name="sellerEmail"
              defaultValue={user?.email}
              readOnly={user.email ? true : false}
              placeholder="Seller Email"
              required
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded bg-yellow-100"
            />
          </div>
          <div className="form-control col-span-3 md:col-span-2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Photo URL"
              required
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-3 md:col-span-2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-3 md:col-span-2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              required
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>

          <div className="form-control col-span-3 md:col-span-2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              required
              placeholder="Rating"
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-3 md:col-span-2">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available quantity"
              required
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-3 md:col-span-2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="subCategory"
              className="bg-yellow-200 w-full h-12 text-center focus:outline-blue-500 focus:bg-blue-100 rounded"
            >
              <option value="marvel">Marvel</option>
              <option value="dc">DC</option>
              <option value="anime">Anime</option>
            </select>
          </div>
          <div className="form-control col-span-6">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea
              name="details"
              required
              className="textarea border border-gray-600 focus:outline-blue-500 focus:border-0 h-28"
              placeholder="Detail description"
            ></textarea>
          </div>
          <div className="form-control col-span-6">
            <input
              type="submit"
              className="btn bg-blue-500 hover:bg-blue-700 border-0"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
