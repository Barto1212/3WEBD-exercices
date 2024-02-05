import { useState } from "react";
import ToDoList from "./TodoList";
import TodoInput from "./TodoInput";

function App() {
  const [toDoList, setTodoList] = useState<string[]>(["Todo 1", "Todo 2", "Todo 3"]);

  return (
    <>
      <ToDoList toDoList={toDoList} />
      <TodoInput setTodoList={setTodoList} />
    </>
  );
}

export default App;
