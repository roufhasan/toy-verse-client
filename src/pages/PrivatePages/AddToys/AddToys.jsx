import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const photoURL = form.photoURL.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.user?.email;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const addedToy = {
      photoURL,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      details,
    };
    console.log(addedToy);
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">Add New Toy</h1>
      <div>
        <form
          onSubmit={handleAddToy}
          className="grid grid-cols-6 gap-x-4 gap-y-8"
        >
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              readOnly={user.displayName ? true : false}
              placeholder="Seller Name"
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded bg-yellow-100"
            />
          </div>
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              name="sellerEmail"
              defaultValue={user?.email}
              readOnly={user.email ? true : false}
              placeholder="Seller Email"
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded bg-yellow-100"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Photo URL"
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available quantity"
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="subCategory"
              className="bg-yellow-200 w-full h-12 text-center focus:outline-blue-500 focus:bg-blue-100 rounded"
            >
              <option value="marvel">Marvel</option>
              <option value="dc">DC</option>
              <option value="Anime">Anime</option>
            </select>
          </div>
          <div className="form-control col-span-6">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea
              name="details"
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
