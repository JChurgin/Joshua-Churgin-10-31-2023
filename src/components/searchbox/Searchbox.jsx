import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./searchbox.css";

const Searchbox = () => {
  return (
    <div className="searchbox">
      <Form>
        <Form.Group className="d-flex align-items-center">
          <Form.Control type="text" placeholder="Enter City Name" />
        <Button>Search</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Searchbox;