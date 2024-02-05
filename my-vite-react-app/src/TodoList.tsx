const ToDoList = ({ toDoList }) => {
  return (
    <>
      <h1>Ma todoList</h1>
      <ul>
        {toDoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
