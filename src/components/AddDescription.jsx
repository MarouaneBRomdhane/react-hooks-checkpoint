import { useState } from "react";
const AddDescription = ({ setdDescription }) => {
  const [description, setdescription] = useState("");

  const onTextChanged = (event) => setdescription(event.target.value);

  const onAddClicked = (event) => {
    if (description === "") {
      alert("Please Enter a Description for the Movie");
    } else {
      const newDescription = { id: Date.now(), Description: description };
      console.log(newDescription);
      setdescription((prev) => [...prev, newDescription]);
      setdescription("");
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={description}
        onChange={onTextChanged}
        placeholder="Add Description."
      />
      <button className="addBtn" onClick={onAddClicked}>
        Add
      </button>
    </div>
  );
};

export default AddDescription;
