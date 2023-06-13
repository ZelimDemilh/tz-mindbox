import React, { FC, useState } from "react";
import styles from "../styles/components/TodoList.module.scss";
import ITodo from "../types/Todo";
import TodoItem from "./TodoItem";
import TodoStatusRow from "./TodoStatusRow";

interface ITodoListProps {
    todos: ITodo[];
}

const TodoList: FC<ITodoListProps> = ({ todos }) => {
    const [category, setCategory] = useState<"All" | "Completed" | "Active">("All");

    const filteredTodos = todos.filter((todo) => {
        if (category === "All") {
            return true;
        } else if (category === "Completed") {
            return todo.completed;
        } else if (category === "Active") {
            return !todo.completed;
        }
        return false;
    });

    const renderTodoItems = () => {
        if (filteredTodos.length === 0) {
            return <div>No todos for this category</div>;
        }

        return filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ));
    };

    return (
        <div className={styles.todoList}>
            {renderTodoItems()}
            <TodoStatusRow category={category} setCategory={setCategory} />
        </div>
    );
};

export default TodoList;