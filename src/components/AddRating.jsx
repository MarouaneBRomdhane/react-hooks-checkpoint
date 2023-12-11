import { useState } from "react";

const AddRating = () => {
  const [rating, setRating] = useState("");

  const handleChange = (event) => {
    // Ensure the entered rating is between 0 and 5
    const newRating = Math.min(Math.max(Number(event.target.value), 0), 5);
    setRating(newRating);
  };

  return (
    <div>
      <h1>Please Enter Movie Rating</h1>
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={handleChange}
        min="0"
        max="5"
      />
    </div>
  );
};

export default AddRating;
