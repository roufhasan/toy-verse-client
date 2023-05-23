import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../titleHook/useTitle";

const UpdateToys = () => {
  const toy = useLoaderData();
  const { price, quantity, details, _id, name } = toy;
  useTitle(`Update - ${name}`);

  const navigate = useNavigate();

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const price = form.price.value;

    const quantity = form.quantity.value;
    const details = form.details.value;

    const UpdateToy = {
      price,
      quantity,
      details,
    };

    fetch(`https://toy-verse-server-roan.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Toy Updated Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/myToys");
        }
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">Update Toy</h1>
      <div>
        <form
          onSubmit={handleUpdateToy}
          className="grid grid-cols-6 gap-x-4 gap-y-8"
        >
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>

          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Available quantity"
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>

          <div className="form-control col-span-6">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea
              name="details"
              defaultValue={details}
              className="textarea border border-gray-600 focus:outline-blue-500 focus:border-0 h-28"
              placeholder="Detail description"
            ></textarea>
          </div>
          <div className="form-control col-span-6">
            <input
              type="submit"
              className="btn bg-blue-500 hover:bg-blue-700 border-0"
              value="Update Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToys;
