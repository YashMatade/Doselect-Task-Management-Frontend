import React from 'react';
import './TaskList.css';

const TaskList = () => {

    // Write your code here to complete the fuctionality

    return (
        <div className="task-list-container">
            <div className="task-form">
                <input
                    type="text"
                    placeholder="Enter new task title"
                />
                <input
                    type="text"
                    placeholder="Enter new task description"
                />
                <button className="btn-create" >
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
                    {/* Write your code here */}
                </tbody>
            </table>
        </div>
    );
};
export default TaskList;
