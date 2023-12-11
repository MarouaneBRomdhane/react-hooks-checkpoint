import { useState } from "react";
const AddName = ({ setName }) => {
  const [name, setname] = useState("");

  const onTextChanged = (event) => setname(event.target.value);

  const onAddClicked = (event) => {
    if (name === "") {
      alert("Please Enter a Name for the Movie");
    } else {
      const newName = { id: Date.now(), Name: name };
      console.log(newName);
      setname((prev) => [...prev, newName]);
      setname("");
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={name}
        onChange={onTextChanged}
        placeholder="Add A Movie Name."
      />
      <button className="addBtn" onClick={onAddClicked}>
        Add
      </button>
    </div>
  );
};

export default AddName;
