import React from "react";

//components
import AddNewTask from "./component/AddNewTask";
import DisplayTask from "./component/DisplayTask";
import Filter from "./component/Filter";

let tasks = localStorage.getItem("task");

const App = () => {
  //useState
  const [initialState, setInitialState] = React.useState(
    JSON.parse(tasks) || []
  );
  const [filterValue, setFilterValue] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem("task", JSON.stringify(initialState));
  }, [initialState]);

  const appendTask = (task) => {
    setInitialState((previous) => {
      return [
        ...previous,
        {
          task: task,
          isCompleted: false,
        },
      ];
    });
  };

  const markComplete = (task) => {
    setInitialState((previous) => {
      return previous.map((value) => {
        if (value.task === task) {
          return {
            ...value,
            isCompleted: !value.isCompleted,
          };
        } else {
          return value;
        }
      });
    });
  };

  const filterTask = (event) => {
    if (event.target.name === "filter") {
      if (event.target.value) {
        setFilterValue(() => {
          return initialState.filter((el) => {
            return el.task.includes(event.target.value);
          });
        });
      } else {
        setFilterValue([]);
      }
    } else if (event.target.name === "check") {
      if (event.target.checked === true) {
        setFilterValue(() => {
          return initialState.filter((el) => el.isCompleted === true);
        });
      } else {
        setFilterValue([]);
      }
    }
  };

  return (
    <>
      <h1>TODO APP</h1>
      <AddNewTask appendTask={appendTask} />
      <Filter filterTask={filterTask} />
      <DisplayTask
        initialState={filterValue.length > 0 ? filterValue : initialState}
        markComplete={markComplete}
      />
    </>
  );
};

export default App;
