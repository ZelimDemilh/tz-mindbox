import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import ITodo from "../types/Todo";
import { dbTodos } from "../db/todos";

interface TodoContextProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  updateTodoCompleted: (id: number) => void;
  addTodo: (title: string) => void;
  clearCompletedTodos: () => void;
}

const TodoContext = createContext<TodoContextProps>({
  todos: [],
  setTodos: () => {},
  updateTodoCompleted: () => {},
  addTodo: () => {},
  clearCompletedTodos: () => {},
});

interface ITodoProviderProps {
  children: ReactNode;
}

const TodoProvider: FC<ITodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(dbTodos || []);

  const updateTodoCompleted = async (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (title: string) => {
    const todo: ITodo = {
      id: Math.floor(Math.random() * 1000000),
      title,
      completed: false,
    };
    setTodos((pre) => [...pre, todo]);
  };

  const clearCompletedTodos = () => {
    setTodos((pre) => pre.filter((todo) => !todo.completed));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        updateTodoCompleted,
        addTodo,
        clearCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
