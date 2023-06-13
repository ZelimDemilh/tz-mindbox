import React, { useContext, useState } from "react";
import styles from "../styles/components/TodoInput.module.scss";
import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext);

  const [title, setTitle] = useState<string>("");

  const handleChangeTitle = (title: string) => {
    setTitle(title);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && title !== "") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => handleChangeTitle(e.target.value)}
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TodoInput;
