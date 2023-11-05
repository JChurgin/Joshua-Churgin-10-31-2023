import Card from "react-bootstrap/Card";
import "./homecard.css";

const Homecard = () => {
  return (
    <div className="main_card d-flex ">
      <Card className="" style={{ width: "55rem" }}>
        <div className="top_weather me-2 ms-2 d-flex justify-content-between align-items-center" style={{ height: '5rem'}}>
          <div
            className="d-flex"
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
          >
            <div>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '5rem'}}>
                day or night
              </div>
            </div>
            <div className="d-flex align-self-center">city name</div>
          </div>
          <div className="d-flex">
            <div>heart</div>
            <div>Favorites button</div>
          </div>
        </div>
        <div
          className="weather_symbol d-flex justify-content-center align-items-center"
          style={{ height: "7rem" }}
        >
          current weather symbole
        </div>
        <div className="bottomweather m-3 d-flex justify-content-between align-items-center">
          <div className="">
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Homecard;
