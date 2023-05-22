import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { name } = toy;
  return (
    <div>
      <h2>Toy Details{name}</h2>
    </div>
  );
};

export default ToyDetails;
