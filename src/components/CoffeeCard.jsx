import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , coffees, setCoffees}) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        console.log("delete confirmed");
        fetch(`https://coffee-store-server-agwl6pcin-rashed-nayans-projects.vercel.app/coffee/${_id}`,{
            method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter(cof=>cof._id!==_id)
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-1/3">
        <img className=" w-full h-full" src={photo} alt="photo" />
      </figure>
      <div className="flex justify-between w-2/3 p-4 items-center">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <Link to={`coffee/${_id}`}><button className="btn">View</button></Link>
            <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-400"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
