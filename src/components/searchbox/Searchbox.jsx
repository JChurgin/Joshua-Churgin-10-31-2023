import Form from "react-bootstrap/Form";
import "./searchbox.css";
import { Button, Col, Row } from "react-bootstrap";

const Searchbox = () => {
  return (
    <div className="search_box">
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter City Name"
                style={{ width: "350px" }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button>Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Searchbox;
