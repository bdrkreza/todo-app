import { useContext, useEffect, useRef, useState } from "react";
import { AppCtx } from "../context/context";

export default function FormInput() {
  const [todos, setTodos] = useContext(AppCtx);
  const [todoName, setTodoName] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
    todoInput.current.focus();
  };

  const todoInput = useRef();

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <div>
      <form autoComplete="off" onSubmit={addTodo}>
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="what needs to be done?"
          ref={todoInput}
          value={todoName}
          onChange={(e) => setTodoName(e.target.value.toLowerCase())}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
