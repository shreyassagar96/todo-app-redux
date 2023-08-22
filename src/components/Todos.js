import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { toast, Toaster } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-white text-xl md:font-bold w-fit flex mx-auto mt-4 p-2">
        Todos :
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="list mt-4 flex justify-between items-center bg-gray-600 px-4 rounded-xl w-auto mx-aut0"
            key={todo.id}
          >
            <div className="text-white p-4 md:font-bold">{todo.text}</div>
            <button
              onClick={() =>
                dispatch(
                  removeTodo(todo.id),
                  toast.success("Deleted Successfully")
                )
              }
              className="text-white bg-red-600 border-0 py01 px-4 focus:outline-none hover:bg-red-700 rounded-md text-md m-2 py-2"
            >
              <AiFillDelete />
            </button>
          </li>
        ))}
      </ul>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Todos;
