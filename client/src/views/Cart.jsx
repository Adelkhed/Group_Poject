import { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/cart")
      .then(response => setCart(response.data))
      .catch(error => console.error("Error charging card:", error));
  }, []);

  const removeFromCart = (id) => {
    axios.delete(`http://localhost:8000/api/cart/${id}`)
      .then(() => setCart(cart.filter(item => item._id !== id)))
      .catch(error => console.error("Error delete:", error));
  };

  return (
    <div>
      <h2>Mon Panier</h2>
      {cart.length === 0 ? <p>Your card is empty.</p> : (
        <ul className="list-group">
          {cart.map(item => (
            <li key={item._id} className="list-group-item">
              {item.flower.title} - ${item.flower.price}
              <button className="btn btn-danger btn-sm float-end" onClick={() => removeFromCart(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
