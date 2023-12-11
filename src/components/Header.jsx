import React from "react";
import AddRating from "./AddRating.jsx";
import AddDescription from "./AddDescription.jsx";
import AddName from "./AddName.jsx";
const Header = ({ setRatings, setDescriptions, setName }) => {
  return (
    <header className="my-todos">
      <h1 className="title">Adding A new Movie</h1>
      {/* AddRating Componfent */}
      <AddRating setRatings={setRatings} />
      <AddDescription setDescriptions={setDescriptions} />
      <AddName setName={setName} />
    </header>
  );
};

export default Header;
