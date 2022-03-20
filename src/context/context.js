import { createContext, useEffect, useState } from "react";

export const AppCtx = createContext();

export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todo"));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <AppCtx.Provider value={[todos, setTodos]}>{children}</AppCtx.Provider>
  );
};
