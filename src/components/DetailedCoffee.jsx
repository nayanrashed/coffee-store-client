import { Link, useLoaderData } from "react-router-dom";

const DetailedCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  return (
    <div className="m-20">
        <div>
        <Link to='/' className='btn btn-ghost'>Home</Link>
      </div>
        <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-2/5">
        <img className="w-full h-[80vh] object-fill" src={photo} alt="photo" />
      </figure>
      <div className="flex w-3/5 p-4 items-center">
        <div className="px-8">
          <h2 className="card-title">Name: {name}</h2>
          <p>Category: {category}</p>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailedCoffee;
