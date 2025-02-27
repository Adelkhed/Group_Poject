import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/flowers")
      .then(response => setFlowers(response.data))
      .catch(error => console.error("Erreur lors du chargement des fleurs:", error));
  }, []);

  return (
    <div>
      <h2>Our flowers</h2>
      <div className="row">
        {flowers.map(flower => (
          <div key={flower._id} className="col-md-4">
            <div className="card">
              <img src={flower.image_url} className="card-img-top" alt={flower.title} />
              <div className="card-body">
                <h5 className="card-title">{flower.title}</h5>
                <p className="card-text">${flower.price}</p>
                <Link to={`/flowers/${flower._id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flowers;
