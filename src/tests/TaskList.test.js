import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // Mock axios for API requests
import TaskList from '../components/TaskList';

jest.mock('axios');

describe('TaskList Component', () => {
    const sampleTasks = [
        { _id: '1', title: 'Task 1', description: 'Description 1' },
        { _id: '2', title: 'Task 2', description: 'Description 2' },
    ];

    beforeEach(() => {
        axios.get.mockResolvedValue({ data: sampleTasks });
    });

    test('renders task list correctly', async () => {
        const { getByText } = render(<TaskList />);
        await waitFor(() => {
            expect(getByText('Task 1')).toBeInTheDocument();
            expect(getByText('Task 2')).toBeInTheDocument();
        });
    });

    test('creates a new task', async () => {
        const { getByText, getByPlaceholderText } = render(<TaskList />);
        axios.post.mockResolvedValue({ data: { title: 'New Task', description: 'New Description' } });

        const titleInput = getByPlaceholderText('Enter new task title');
        const descriptionInput = getByPlaceholderText('Enter new task description');
        const createTaskButton = getByText('Create Task');

        fireEvent.change(titleInput, { target: { value: 'New Task' } });
        fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
        fireEvent.click(createTaskButton);

        await waitFor(() => {
            expect(getByText('New Task')).toBeInTheDocument();
            expect(getByText('New Description')).toBeInTheDocument();
        });
    });

    test('updates an existing task', async () => {
        // Initial render with sample tasks
        const { getByText, getByPlaceholderText, getAllByText } = render(<TaskList />);

        // Mock an updated task
        const updatedTask = { _id: '1', title: 'Updated Task', description: 'Updated Description' };
        axios.put.mockResolvedValue({ data: updatedTask });

        // Wait for tasks to be loaded
        await waitFor(() => {
            fireEvent.click(getAllByText('Edit')[0]); // Assuming the first "Edit" button is the one you want to click
        });

        // Simulate updating the task
        fireEvent.change(getByPlaceholderText('Enter new task title'), { target: { value: 'Updated Task' } });
        fireEvent.change(getByPlaceholderText('Enter new task description'), { target: { value: 'Updated Description' } });
        fireEvent.click(getByText('Update'));

        // Wait for the updated task to appear
        await waitFor(() => {
            expect(getByText('Updated Task')).toBeInTheDocument();
            expect(getByText('Updated Description')).toBeInTheDocument();
        });
    });

    test('deletes an existing task', async () => {
        // Initial render with sample tasks
        const { getAllByText, queryByText } = render(<TaskList />);

        // Mock a deleted task
        axios.delete.mockResolvedValue({ _id: '1' });

        // Wait for tasks to be loaded
        await waitFor(() => {
            fireEvent.click(getAllByText('Delete')[0]);
        });

        // Wait for the task to be deleted
        await waitFor(() => {
            // Verify that the task is no longer in the document
            expect(queryByText('Task 1')).not.toBeInTheDocument();
            expect(queryByText('Description 1')).not.toBeInTheDocument();
        });
    });
});