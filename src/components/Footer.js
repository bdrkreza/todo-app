import { useContext, useState } from "react";
import { AppCtx } from "../context/context";

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(AppCtx);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((item) => {
      item.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(newTodos);
    setCheckAll(false);
  };
  return (
    <div>
      <div className="row">
        <label htmlFor="all">
          <input
            type="checkbox"
            checked={checkAll}
            name="all"
            onChange={handleCheckAll}
            id=""
          />
          all
        </label>
        <p>
          you have {todos.filter((todo) => todo.complete === false).length} to
          do
        </p>
        <button id="delete" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
}
