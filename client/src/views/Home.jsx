import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcom in Floral Haven 🌿</h1>
      <p>Découvrez our  flowers and pass your command.</p>
      <Link to="/flowers" className="btn btn-primary">View Flowers</Link>
    </div>
  );
};

export default Home;
