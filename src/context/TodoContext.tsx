import React, {createContext, FC, ReactNode, useState} from 'react';
import ITodo from "../types/Todo";
import {dbTodos} from "../db/todos";


interface TodoContextProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    updateTodoCompleted: (id: number) => void
}

const TodoContext = createContext<TodoContextProps>({
    todos: [],
    setTodos: () => {},
    updateTodoCompleted: () => {}
});

interface ITodoProviderProps {
    children: ReactNode
}

const TodoProvider: FC<ITodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>(dbTodos);

    const updateTodoCompleted = (id: number) => {
        setTodos(todos.map(todo => todo.id === id? {...todo, completed: !todo.completed}: todo))
    }

    return (
        <TodoContext.Provider value={{ todos, setTodos, updateTodoCompleted }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };