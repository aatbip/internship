import React from "react";

//components
import AddNewTask from "./component/AddNewTask";
import DisplayTask from "./component/DisplayTask";
import Filter from "./component/Filter";

let items = JSON.parse(localStorage.getItem("tasks"));
const App = () => {
  const [initialState, setInitialState] = React.useState(items || []);
  const [filterValue, setFilterValue] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(initialState));
  }, [initialState]);

  const appendTask = (task) => {
    setInitialState((prev) => {
      return [
        ...prev,
        {
          tasks: task,
          isCompleted: false,
        },
      ];
    });
  };

  const updateComplete = (task) => {
    setInitialState((prev) => {
      return prev.map((el) => {
        if (el.tasks === task) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          };
        } else {
          return el;
        }
      });
    });
  };

  const filterData = (e) => {
    if (e.target.name === "filter") {
      if (e.target.value) {
        setFilterValue(() => {
          return initialState.filter((el) => {
            return el.tasks.includes(e.target.value);
          });
        });
      } else {
        setFilterValue([]);
      }
    } else if (e.target.name === "check") {
      if (e.target.checked === true) {
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
      <Filter filterData={filterData} />
      <DisplayTask
        initialState={filterValue.length > 0 ? filterValue : initialState}
        updateComplete={updateComplete}
      />
    </>
  );
};

export default App;
