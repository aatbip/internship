import React from "react";

const DisplayTask = ({ initialState, updateComplete }) => {
  const styles = {
    markedTask: {
      color: "red",
    },
  };
  return (
    <>
      <table>
        <tr style={{ display: "flex", gap: "4em" }}>
          <th>Task Name</th>
          <th>Mark Done</th>
        </tr>

        {initialState.map((value) => {
          return (
            <>
              <tr style={{ display: "flex", justifyContent: "space-between" }}>
                <td style={value.isCompleted ? styles.markedTask : null}>
                  {value.tasks}
                </td>
                <td>
                  <input
                    type="checkbox"
                    key={value.tasks}
                    checked={value?.isCompleted}
                    onClick={() => updateComplete(value.tasks)}
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
