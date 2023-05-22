import AllToysRow from "./AllToysRow";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-center mb-8">All Toys List</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.slice(0, 20).map((toy) => (
              <AllToysRow key={toy._id} toy={toy}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
