import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FlowerDetails = () => {
  const { id } = useParams();
  const [flower, setFlower] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/flowers/${id}`)
      .then(response => setFlower(response.data))
      .catch(error => console.error("Erreur lors du chargement de la fleur:", error));
  }, [id]);

  if (!flower) return <p>Chargement...</p>;

  return (
    <div className="card p-4">
      <img src={flower.image_url} className="card-img-top" alt={flower.title} />
      <h2>{flower.title}</h2>
      <p>{flower.description}</p>
      <p><strong>Prix:</strong> ${flower.price}</p>
    </div>
  );
};

export default FlowerDetails;
