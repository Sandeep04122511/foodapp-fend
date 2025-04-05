import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

// Define BASE_URL using the deployed Render backend link
const BASE_URL = process.env.REACT_APP_BACKEND_URL || "https://foodapp-bend.onrender.com";

const FoodDashboard = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("https://foodapp-bend.onrender.com/admin/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.error("Error fetching foods:", err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://foodapp-bend.onrender.com/admin/delete-food/${id}`)
      .then(() => {
        setFoods(foods.filter(food => food._id !== id));
        alert("Food deleted successfully");
      })
      .catch((err) => console.error("Error deleting food:", err));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Food Dashboard</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Restaurant</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food._id}>
                <td>{food.name}</td>
                <td>${food.price}</td>
                <td>{food.category}</td>
                <td>{food.restaurant}</td>
                <td>
                  <button onClick={() => handleDelete(food._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodDashboard;
