import React, { useState } from 'react';
import { useTaskList } from '../../context/taskContext';
import './tasks.css';

export default function Tasks() {
    const { state, dispatch } = useTaskList();
    const [inputText, setInputText] = useState();
    const [taskClass, setTaskClass] = useState("pending-task");

    const ToggleState = (ele) => {
        if (ele.status) {
            dispatch({ type: "CHANGE_TASK_STATE", payload: { title: ele.title, status: false } })
        }
        else {
            dispatch({ type: "CHANGE_TASK_STATE", payload: { title: ele.title, status: true } })
        }
    }

    return (
        <div className="tasks-container">
            <h1 className="tasks-heading"> Tasks </h1>

            <div>
                {state.map((ele) => {
                    return <div className="to-do">
                        <div className="input-div">
                            <input type="checkbox" checked={ele.status ? true : false}
                                onClick={() => { ToggleState(ele) }}
                            />
                            <div className={ele.status ? "task-title done" : "task-title pending"}>{ele.title}</div>
                        </div>
                        <div onClick={(e) => dispatch({ type: "DELETE_TASK", payload: { title: ele.title } })}> <i class="fa-solid fa-trash"></i></div>
                    </div>
                })}
            </div>
            <div className="add-task-div">
                <input className="task-input" type="text" onChange={(e) => setInputText(e.target.value)} />
                <button className="btn add-btn" onClick={(e) => dispatch({ type: "ADD_TASK", payload: { title: inputText, status: false } })}> Add task </button>
            </div>
        </div>
    )
}