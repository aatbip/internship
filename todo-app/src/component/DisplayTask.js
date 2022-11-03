import React from "react";

const DisplayTask = ({ initialState, markComplete }) => {
  const styles = {
    markedTask: {
      textDecorationLine: "line-through",
    },
  };
  return (
    <>
      <table>
        <tr style={{ display: "flex", gap: "4em" }}>
          <th>Task Name</th>
          <th>Mark Done</th>
        </tr>

        {initialState.map((el) => {
          return (
            <>
              <tr>
                <td>{el.task}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={el.isCompleted}
                    onClick={() => markComplete(el.task)}
                  />
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default DisplayTask;
