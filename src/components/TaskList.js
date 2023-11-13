import React, { useState, useEffect } from 'react';
import { getAllTasks, createTask, updateTaskById, deleteTaskById } from '../api/taskApi';
import './TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [editedTaskTitle, setEditedTaskTitle] = useState('');
    const [editedTaskDescription, setEditedTaskDescription] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            const tasksData = await getAllTasks();
            setTasks(tasksData);
        };
        fetchTasks();
    }, []);

    const handleCreateTask = async () => {
        if (newTaskTitle && newTaskDescription) {
            const newTask = { title: newTaskTitle, description: newTaskDescription };
            const createdTask = await createTask(newTask);
            setTasks((prevTasks) => [...prevTasks, createdTask]);
            setNewTaskTitle('');
            setNewTaskDescription('');
        }
    };

    const handleUpdateTask = async (taskId, updatedTitle, updatedDescription) => {
        const updatedTask = await updateTaskById(taskId, { title: updatedTitle, description: updatedDescription });
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
        );
        setSelectedTaskId(null);
        setEditedTaskTitle('');
        setEditedTaskDescription('');
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTaskById(taskId);
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    };

    const handleEditTask = (taskId, title, description) => {
        setSelectedTaskId(taskId);
        setEditedTaskTitle(title);
        setEditedTaskDescription(description);
    };

    return (
        <div className="task-list-container">
            <div className="task-form">
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Enter new task title"
                />
                <input
                    type="text"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    placeholder="Enter new task description"
                />
                <button className="btn-create" onClick={handleCreateTask}>
                    Create Task
                </button>
            </div>
            <h2>Task List</h2>
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={String(task._id)}>
                            <td>{task._id === selectedTaskId ? <input type="text" value={editedTaskTitle} onChange={(e) => setEditedTaskTitle(e.target.value)} /> : task.title}</td>
                            <td>{task._id === selectedTaskId ? <input type="text" value={editedTaskDescription} onChange={(e) => setEditedTaskDescription(e.target.value)} /> : task.description}</td>
                            <td>
                                {task._id === selectedTaskId ? (
                                    <>
                                        <button
                                            className="btn-update"
                                            onClick={() => handleUpdateTask(task._id, editedTaskTitle, editedTaskDescription)}
                                        >
                                            Update
                                        </button>
                                        <button className="btn-delete" onClick={() => setSelectedTaskId(null)}>
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="btn-update" onClick={() => handleEditTask(task._id, task.title, task.description)}>
                                            Edit
                                        </button>
                                        <button className="btn-delete" onClick={() => handleDeleteTask(task._id)}>
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default TaskList;