import React from "react";

const AddNewTask = ({ appendTask }) => {
  const [task, setTask] = React.useState("");


  const handleChange = (event) => {
    setTask(event.target.value);
  };

 



  return (
    <div>
      <input
        type="text"
        name="task"
        onChange={(event) => handleChange(event)}
      />
      <button type="button" onClick={() => appendTask(task)}>ADD</button>
    </div>
  );
};

export default AddNewTask;
