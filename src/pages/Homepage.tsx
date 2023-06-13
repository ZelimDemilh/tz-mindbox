import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/pages/Homepage.module.scss";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/TodoContext";
import TodoInput from "../components/TodoInput";

const Homepage = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className={styles.main}>
      <p className={styles.about}> todos </p>
      <TodoInput />
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Homepage;
