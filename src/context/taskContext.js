import React, { useState, createContext, useContext, useReducer } from 'react';
import { taskReducer } from '../reducer/taskReducer';

export const TaskList = createContext();

export const useTaskList = () => useContext(TaskList);

export const TaskListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, []);
    return (
        <TaskList.Provider value={{ state, dispatch }}>
            {children}
        </TaskList.Provider>
    )
}