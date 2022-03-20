import { useContext } from "react";
import { AppCtx } from "../context/context";
import ListItem from "./ListItem";

export default function List() {
  const [todos, setTodos] = useContext(AppCtx);

  const switchComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.map((item, index) => {
      if (index === id) {
        item.name = editValue;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((item, index) => (
        <ListItem
          item={item}
          key={index}
          id={index}
          checkComplete={switchComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </div>
  );
}
