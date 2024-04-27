import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function ToDoList() {
  const [tasks, setTasks] = useState(["Wake up", "Eat Breakfast"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>TO-DO-LIST APP</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="btn btn-success" onClick={addTask}>
          Add
        </button>

        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              <span className="text">{task}</span>
              <button
                className="btn btn-danger"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>

              <button
                className="btn btn-info  btn-delete"
                onClick={() => moveTaskUp(index)}
              >
                👆
              </button>

              <button
                className="btn btn-info  "
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
