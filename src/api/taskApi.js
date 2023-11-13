import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Fetch all tasks
export const getAllTasks = async () => {
    const response = await axios.get(`${BASE_URL}/tasks`);
    return response.data;
};

// Create a new task
export const createTask = async (taskData) => {
    const response = await axios.post(`${BASE_URL}/tasks`, taskData);
    return response.data;
};

// Update an existing task
export const updateTaskById = async (id, taskData) => {
    const response = await axios.put(`${BASE_URL}/tasks/${id}`, taskData);
    return response.data;
};

// Delete an existing task
export const deleteTaskById = async (id) => {
    const response = await axios.delete(`${BASE_URL}/tasks/${id}`);
    return response.data;
};