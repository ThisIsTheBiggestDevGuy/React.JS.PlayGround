
import React, {useState} from "react";
import styles from './ToDoList.module.css'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index - 1]] =
            [updatedTasks[index -1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index + 1]] =
            [updatedTasks[index +1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className={styles.toDoList}>
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text"
                    placeholder="insert task..."
                    value={newTask}
                    onChange={handleInputChange}/>
                <button
                    className={styles.addButton}
                    onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className={styles.text}>{task}</span>
                    <button
                        className={styles.deleteButton}
                        onClick={() => deleteTask(index)}>delete
                    </button>
                    <button
                        className={styles.moveUpButton}
                        onClick={() => moveTaskUp(index)}>UP
                    </button>
                    <button
                        className={styles.moveDownButton}
                        onClick={() => moveTaskDown(index)}>Down
                    </button>
                </li>)}
            </ol>
        </div>
    );
}
export default ToDoList;
