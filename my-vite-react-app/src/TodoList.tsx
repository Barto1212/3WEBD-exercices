type Props = {
  /**
   * La liste des todos
   */
  toDoList: string[];
};

const ToDoList = ({ toDoList }: Props) => {
  return (
    <>
      <h1>Ma todoList</h1>
      <ul>
        {toDoList.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
