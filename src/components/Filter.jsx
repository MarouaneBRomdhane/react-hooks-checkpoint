import React from "react";
import Form from "react-bootstrap/Form";

const Filter = ({ onFilterChange }) => {
  const handleInputChange = (e) => {
    const searchText = e.target.value;
    const searchRating = e.target.value;

    onFilterChange(searchText);
    onFilterChange(searchRating);
  };

  return (
    <Form.Group controlId="filterInput">
      <Form.Label></Form.Label>
      <Form.Control
        className="m-b=3"
        type="text"
        placeholder="Tapez pour filtrer..."
        onChange={handleInputChange}
      />
    </Form.Group>
  );
};

export default Filter;
