import React, { useState } from 'react';
import { useTaskList } from '../../context/taskContext';
import './tasks.css';
import { v4 as uuid } from 'uuid';

export default function Tasks() {
    const { state, dispatch } = useTaskList();
    const [inputText, setInputText] = useState();
    const [taskClass, setTaskClass] = useState("pending-task");
    const short_uuid = uuid().slice(0, 8);

    const ToggleState = (ele) => {
        console.log(ele);
        dispatch({ type: "DELETE_TASK", payload: { _id: ele._id } });
        dispatch({ type: "ADD_TASK", payload: { title: ele.title, status: !ele.status, _id: ele._id } });

    }

    return (
        <div className="tasks-container">
            <h1 className="tasks-heading"> Tasks </h1>

            <div>
                {state.map((ele) => {
                    return <div className="to-do" key={ele._id}>
                        <div className="input-div">
                            <input type="checkbox" checked={ele.status ? true : false}
                                onClick={() => { ToggleState(ele) }}
                            />
                            <div className={ele.status ? "task-title done" : "task-title pending"}>{ele.title}</div>
                        </div>
                        <div onClick={(e) => dispatch({ type: "DELETE_TASK", payload: { _id: ele._id } })}> <i className="fa-solid fa-trash"></i></div>
                    </div>
                })}
            </div>
            <div className="add-task-div">
                <input className="task-input" type="text" onChange={(e) => setInputText(e.target.value)} />
                <button className="btn add-btn" onClick={(e) => dispatch({ type: "ADD_TASK", payload: { title: inputText, status: false, _id: short_uuid } })}> Add task </button>
            </div>
        </div>
    )
}