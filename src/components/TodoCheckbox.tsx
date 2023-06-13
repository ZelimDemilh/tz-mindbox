import React, { FC, useContext } from "react";
import styles from "../styles/components/TodoCheckbox.module.scss";
import { TodoContext } from "../context/TodoContext";

interface ITodoCheckboxProps {
  checked: boolean;
  id: number;
}

const TodoCheckbox: FC<ITodoCheckboxProps> = ({ checked, id }) => {
  const { updateTodoCompleted } = useContext(TodoContext);

  return (
    <div
      className={styles.checkboxWrapper}
      onClick={() => updateTodoCompleted(id)}
    >
      <input type="checkbox" checked={checked} readOnly={true} />
      <span className={styles.checkbox}></span>
    </div>
  );
};

export default TodoCheckbox;
