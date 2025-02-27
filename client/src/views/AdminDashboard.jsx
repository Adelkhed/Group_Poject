import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [popular, setPopular] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/orders", { withCredentials: true })
      .then(res => setOrders(res.data));

    axios.get("http://localhost:8000/api/flowers/popular")
      .then(res => setPopular(res.data.flower));
  }, []);

  return (
    <div>
      <h2>Dashboard Admin</h2>
      <p>Total orders : {orders.length}</p>
      {popular && (
        <p>Product Populaire : {popular.title} - {popular.price}$</p>
      )}
    </div>
  );
};

export default AdminDashboard;
