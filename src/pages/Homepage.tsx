import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/pages/Homepage.module.scss"
import TodoList from "../components/TodoList";
import {dbTodos} from "../db/todos";
import {TodoContext} from "../context/TodoContext";

const Homepage = () => {

    const { todos } = useContext(TodoContext)

    const updateTodos = async () => {
        //иммитация fetch запроса
    }

    useEffect(() => {
        updateTodos()
    }, [])

    return (
        <div className={styles.main}>
            <p className={styles.about}></p>
            <div>
                <TodoList todos={todos}/>
            </div>
        </div>
    );
};

export default Homepage;