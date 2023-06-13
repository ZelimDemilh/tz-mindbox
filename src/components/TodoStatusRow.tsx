import React, { FC, useContext } from "react";
import styles from "../styles/components/TodoStatusRow.module.scss";
import cn from "classnames";
import { TodoContext } from "../context/TodoContext";

interface ITodoStatusRowProps {
  category: "All" | "Completed" | "Active"
  setCategory: React.Dispatch<
    React.SetStateAction<"All" | "Completed" | "Active">
  >;
}

const categoriesTodo: ("All" | "Completed" | "Active")[] = [
  "All",
  "Completed",
    "Active"
];

const TodoStatusRow: FC<ITodoStatusRowProps> = ({
                                                    category,
                                                    setCategory,
}) => {
  const { todos, clearCompletedTodos } = useContext(TodoContext);
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

    const renderCategoryOptions = () => {
        return categoriesTodo.map((cat) => {
            return (
                <span
                    key={cat}
                    className={cn(styles.categoryOption, {
                        [styles.active]: cat === category,
                    })}
                    onClick={() => setCategory(cat)}
                >
          {cat}
        </span>
            );
        });
    };

    return (
        <div className={styles.statusRow}>
            <div>{itemsLeft} items left</div>
            <div>{renderCategoryOptions()}</div>
            <div onClick={clearCompletedTodos}>Clear completed</div>
        </div>
    );
};

export default TodoStatusRow;
