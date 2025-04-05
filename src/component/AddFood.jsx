//food.js file to add food contents
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const AddFood = () => {
  const [food, setFood] = useState({ name: "", price: "", category: "", restaurant: "" });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://foodapp-bend.onrender.com/admin/add-food", food)
      .then(() => alert("Food added successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Add New Food Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name:</label>
            <input type="text" name="name" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Price:</label>
            <input type="number" name="price" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Category:</label>
            <input type="text" name="category" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Restaurant:</label>
            <input type="text" name="restaurant" className="form-control" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Add Food</button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
