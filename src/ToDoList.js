import React from "react";
import ToDo from "./ToDo";

import "./ToDoList.css";

import { useSelector } from "react-redux";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  const { todos } = useSelector((store) => store.todos);
  console.log(todos);
  return (
    <>
      <div className="ToDoList">
        {todos.map((todo) => (
          <ToDo data={todo} key={todo.id} />
        ))}
      </div>
      <ToDoForm />
    </>
  );
};
export default ToDoList;
