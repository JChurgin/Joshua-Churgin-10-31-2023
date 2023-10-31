import Homecard from '../homecard/Homecard';
import Searchbox from '../searchbox/Searchbox';
import './home.css';

const Home = () => {
  return (
    <div>
      <Searchbox />
      <Homecard />
    </div>
  )
}

export default Home