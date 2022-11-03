import React from "react";

const AddNewTask = ({ appendTask }) => {
  const [task, setTask] = React.useState(""); //initial state

  const handleInput = (event) => {
    setTask(event.target.value);
  };




  return (
    <div>
      <input type="text" name="task" onChange={(event) => handleInput(event)} />
      <button type="button" onClick={() => appendTask(task)}>ADD</button>
    </div>
  );
};

export default AddNewTask;
