import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`https://coffee-store-server-agwl6pcin-rashed-nayans-projects.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="p-20 bg-[#F4F3F0]">
        <div>
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
        </div>
        <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>
        <form onSubmit={handleUpdateCoffee}>
          {/* form name and quantity row */}
          <div className="md:flex gap-4 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={name}
                  placeholder="Coffee Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  name="quantity"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>

          {/* form supplier and taste row */}
          <div className="md:flex gap-4 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={supplier}
                  placeholder="Supplier"
                  name="supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={taste}
                  placeholder="Taste"
                  name="taste"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex gap-4 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={category}
                  placeholder="Category"
                  name="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={details}
                  placeholder="Details"
                  name="details"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo URL row */}
          <div className="mb-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input className="btn btn-block" type="submit" value="Update Coffee" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
