import { useState } from "react";

const TodoInput = ({ setTodoList }) => {
  const [input, setInput] = useState("");

  function handleClick() {
    setTodoList((oldTodoList) => [...oldTodoList, input]);
    setInput("");
  }

  return (
    <>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
      />
      <button onClick={handleClick}>Ajouter un todo</button>
    </>
  );
};

export default TodoInput;
