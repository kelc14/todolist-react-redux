import React from "react";
import "./ToDo.css";
import { useDispatch } from "react-redux";
import { removeToDo } from "./features/toDoSlice";

const ToDo = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="ToDo">
      <p className="ToDo-text">{data.text}</p>
      <i
        className="fa-sharp fa-solid fa-check ToDo-icon"
        onClick={() => {
          dispatch(removeToDo(data.id));
        }}
      ></i>{" "}
    </div>
  );
};

export default ToDo;
