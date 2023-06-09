import React, {FC} from 'react';
import styles from "../styles/components/TodoItem.module.scss"
import ITodo from "../types/Todo";
import TodoCheckbox from "./TodoCheckbox";
import cn from "classnames";


interface ITodoItemProps {
    todo: ITodo
}

const TodoItem: FC<ITodoItemProps> = ({todo}) => {

    const { title, completed, id} = todo;

    return (
        <div className={styles.todoItem}>
            <div>
                <TodoCheckbox checked={completed} id={id}/>
            </div>
            <div className={cn(styles.todo, {
                [styles.completed]: completed
            })}>
                {title}
            </div>
        </div>
    );
};

export default TodoItem;