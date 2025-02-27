import { useState, useEffect } from "react";
import axios from "axios";
import FlowerCard from "../components/FlowerCard";

const Shop = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    axios.get("/api/flowers")
      .then(response => setFlowers(response.data))
      .catch(error => console.error("Error fetching flowers:", error));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4">Shop Flowers</h2>
      <div className="row">
        {flowers.map(flower => (
          <FlowerCard key={flower._id} flower={flower} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
