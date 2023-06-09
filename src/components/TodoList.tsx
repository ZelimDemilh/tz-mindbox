import React, {FC} from 'react';
import styles from "../styles/components/TodoList.module.scss"
import ITodo from "../types/Todo";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    todos: ITodo[]
}

const TodoList: FC<ITodoListProps> = ({todos}) => {
    return (
        <div>
            {todos.map(todo =>
                <TodoItem todo={todo}/>
            )}
        </div>
    );
};

export default TodoList;