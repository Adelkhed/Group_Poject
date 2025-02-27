import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/orders", { withCredentials: true })
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error  charging  orders:", err));
  }, []);

  return (
    <div>
      <h2>My  Commands</h2>
      {orders.length === 0 ? (
        <p>no command trouvée.</p>
      ) : (
        <ul className="list-group">
          {orders.map((order) => (
            <li key={order._id} className="list-group-item">
              Commande #{order._id} - Total: ${order.total} - Status: {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
