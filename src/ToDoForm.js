import React, { useState } from "react";
import "./ToDoForm.css";
import { v4 as uuid } from "uuid";

import { useDispatch } from "react-redux";
import { addToDo } from "./features/toDoSlice";

/** Render ToDoForm
 *
 * props: dispatch(addToDo) - function to set state by adding new todo object to todos array
 *
 * - form component which includes fields for each "blank" in creating a new to do */

const ToDoForm = () => {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    text: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send formData to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // add an id to use for meme key and id for deleting todos later
    formData.id = uuid();
    formData.completed = false;
    // add form through dispatch
    dispatch(addToDo(formData));
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** RENDER:
   *
   */
  return (
    <div className="ToDoForm">
      <form onSubmit={handleSubmit} className="ToDoForm-container">
        <input
          id="text"
          name="text"
          type="text"
          placeholder="Add Item to List"
          onChange={handleChange}
          value={formData.text}
          className="ToDoForm-input"
          required
        />

        <button className="ToDoForm-btn">+</button>
      </form>
    </div>
  );
};

export default ToDoForm;
