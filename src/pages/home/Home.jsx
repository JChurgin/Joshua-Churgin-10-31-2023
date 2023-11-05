import Homecard from "../../components/homecard/Homecard";
import Searchbox from "../../components/searchbox/Searchbox";
import "./home.css";

const Home = () => {

  return (
    <div className="home">
      <Searchbox />
      <Homecard />
    </div>
  );
};

export default Home;