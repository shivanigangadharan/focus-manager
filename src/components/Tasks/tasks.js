import React, { useState, useEffect } from 'react';
import './tasks.css';
import axios from 'axios';
import { useAuth } from '../../context/authContext';

export default function Tasks() {
    const { loggedUserID } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState();
    const [taskClass, setTaskClass] = useState("pending-task");
    const [val, setVal] = useState('');

    const fetchData = async () => {
        const res = await axios.get(`https://627e95b5b75a25d3f3bacc6f.mockapi.io/api/tasks/users/${loggedUserID}/userTasks`);
        console.log("res = ", res);
        setTasks(res.data);
    }

    useEffect(() => {
        if (loggedUserID) {
            fetchData();
        }
    }, [loggedUserID]);

    const toggleTaskStatus = async (updatedTask) => {
        const res = await axios.put(`https://627e95b5b75a25d3f3bacc6f.mockapi.io/api/tasks/users/${loggedUserID}/userTasks/${updatedTask.id}`,
            updatedTask
        );
        fetchData();
    }

    const addTask = async (taskObj) => {
        if (loggedUserID) {
            const res = await axios.post(`https://627e95b5b75a25d3f3bacc6f.mockapi.io/api/tasks/users/${loggedUserID}/userTasks`,
                taskObj
            );
            console.log("posted: ", res);
            fetchData();
        }
        else {
            alert("Please login to add tasks.");
        }
    }

    const deleteTask = async (taskId) => {
        const res = await axios.delete(`https://627e95b5b75a25d3f3bacc6f.mockapi.io/api/tasks/users/${loggedUserID}/userTasks/${taskId}`);
        console.log("Deleted: ", res.data);
        fetchData();
    }

    return (
        <div className="tasks-container">
            <h1 className="tasks-heading"> Tasks </h1>

            <div>
                {tasks.map((ele) => {
                    return <div className="to-do" key={ele.id}>
                        <div className="input-div">
                            <input type="checkbox" className="checkbox" checked={ele.status ? true : false}
                                onClick={() => { toggleTaskStatus({ title: inputText, status: !ele.status, id: ele.id }) }}
                            />
                            <div className={ele.status ? "task-title done" : "task-title pending"}>{ele.title}</div>
                        </div>
                        <div className="task-icons">
                            <div onClick={() => { deleteTask(ele.id); setVal(ele.title) }}> <i className="fa-solid fa-pen"></i></div>
                            <div onClick={() => deleteTask(ele.id)}> <i className="fa-solid fa-trash"></i></div>
                        </div>
                    </div>
                })}
            </div>
            <div className="add-task-div">
                <input className="task-input" type="text" onChange={(e) => { setInputText(e.target.value); setVal(e.target.value); }} value={val} />
                <button className="btn add-btn" onClick={(e) => { setVal(''); addTask({ title: inputText, status: false }) }}> Add task </button>
            </div>
        </div>
    )
}