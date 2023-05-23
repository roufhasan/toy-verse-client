import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import useTitle from "../../../titleHook/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  useTitle("My Toys");
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`https://toy-verse-server-roan.vercel.app/mytoys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user?.email]);

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-center mb-8">My Toys List</h2>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Sub Category</th>
              <th>Details</th>
              <th>Seller</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy, index) => (
              <MyToysRow
                key={myToy._id}
                myToy={myToy}
                index={index}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
