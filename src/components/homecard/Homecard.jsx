import Card from "react-bootstrap/Card";
import "./homecard.css";

const Homecard = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '40rem', height: '20rem', marginTop: '20px' }}>
        <Card.Body>This is search results.</Card.Body>
      </Card>
    </div>
  );
};

export default Homecard;
