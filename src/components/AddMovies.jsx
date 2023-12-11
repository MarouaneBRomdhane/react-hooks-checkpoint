import { useState } from "react";
const AddTask = ({ setTasks }) => {
  const [text, setText] = useState("");

  const onTextChanged = (event) => setText(event.target.value);

  const onAddClicked = (event) => {
    if (text === "") {
      alert("Please Enter a Task Name");
    } else {
      const newTask = { id: Date.now(), taskName: text, isDone: false };
      console.log(newTask);
      setTasks((prev) => [...prev, newTask]);
      setText("");
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={text}
        onChange={onTextChanged}
        placeholder="Add Todo..."
      />
      <button className="addBtn" onClick={onAddClicked}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
