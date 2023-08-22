import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { toast, Toaster } from "react-hot-toast";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    toast.success("Successfully Added Todo");
    setInput("");
  };
  const disableTodoHandler = (e) => {
    e.preventDefault();
    toast.error("Please Enter Your Task");
  };

  return (
    <>
      <h1 className="text-white md:font-bold text-4xl">TODO APP</h1>
      <form
        onSubmit={input.length === 0 ? disableTodoHandler : addTodoHandler}
        className="space-x-3 mt-12"
      >
        <input
          type="text"
          className="bg-gray-800 rounded bordeer border-gray-700 focus:border-indigo-500 focus:rinf-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-fit"
          placeholder="Enter The Todos..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="btn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none rounded-md "
        >
         Add Todo
        </button>
      </form>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default AddTodo;
