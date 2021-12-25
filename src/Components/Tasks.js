//import React from 'react'
import Task from "./Task";
import { useContext } from "react";
import { usercontext } from "../App";

const Tasks = ({ onDelete, onToggle }) => {
  const tasks = useContext(usercontext);
  return (
    // setTasks([...tasks,{}])
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
