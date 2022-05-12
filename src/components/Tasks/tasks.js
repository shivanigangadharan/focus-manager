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
        <div>
            <h1> Tasks </h1>

            <div>
                {state.map((ele) => {
                    return <div className={ele.status ? "done-task" : "pending-task"}>
                        <input type="checkbox" checked={ele.status ? true : false}
                            onClick={() => { ToggleState(ele) }}
                        />
                        {ele.title}
                        <button onClick={(e) => dispatch({ type: "DELETE_TASK", payload: { title: ele.title } })}> Delete </button>
                    </div>
                })}
            </div>

            <input type="text" onChange={(e) => setInputText(e.target.value)} />

            <button onClick={(e) => dispatch({ type: "ADD_TASK", payload: { title: inputText, status: false } })}> Add task </button>
        </div>
    )
}