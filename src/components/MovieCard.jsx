import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import "../App.css";
// import { Row } from "react-bootstrap";
// import "../App";
// import App from "../App.js"
const MovieCard = (props) => {
  const { Movies } = props;
  const { title, posterURL, description, rating } = Movies;
  return (
    <Col md={3.6} sm={6} className="mb-3">
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={posterURL}
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
        />
        <Card.Body>
          <Card.Title>Title: {title} </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <b>Description :</b> {description}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <b>Rating:</b> {rating}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};
export default MovieCard;
