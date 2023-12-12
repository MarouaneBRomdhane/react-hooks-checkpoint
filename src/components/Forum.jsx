import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Forum = ({ onAddMovie }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
    posterURL: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddMovie = () => {
    // Validation logic can be added here
    onAddMovie({
      title: formData.title,
      description: formData.description,
      rating: `${formData.rating}`,
      posterURL: formData.posterURL,
    });
    setFormData({
      title: "",
      description: "",
      rating: "",
      posterURL: "",
    });
    setShowModal(false);
  };

  return (
    <>
      <Button variant="dark" onClick={() => setShowModal(true)}>
        Add a movie
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="rating">
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                min="0"
                max="5"
              />
            </Form.Group>

            <Form.Group controlId="posterURL">
              <Form.Label>Image URL:</Form.Label>
              <Form.Control
                type="text"
                name="posterURL"
                value={formData.posterURL}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Forum;
