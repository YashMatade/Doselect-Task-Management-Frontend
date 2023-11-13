# Task Management Project - FrontEnd

Welcome to the Task Management project! This is a full-stack application designed to manage tasks efficiently. The project is built using the MERN (MongoDB, Express.js, React, Node.js) stack, ensuring a robust and scalable solution for task-related activities.

## Project Overview

The primary goal of this project is to facilitate the management of tasks through a user-friendly interface. Tasks can be created, updated, and deleted, providing a seamless experience for users looking to organize their work.

## Technology Stack

- **MongoDB:** A NoSQL database used to store and manage task data.
- **Express.js:** A web application framework for Node.js, simplifying the development of robust APIs.
- **React:** A JavaScript library for building user interfaces, utilized for the frontend.
- **Node.js:** An asynchronous event-driven JavaScript runtime, serving as the backend platform.

## Project Features

- **Task Creation:** Easily create new tasks with titles and descriptions.
- **Task Updates:** Update existing tasks with modified titles and descriptions.
- **Task Deletion:** Remove tasks that are no longer needed.

## Project Structure (TO DO)

The main codebase resides in the `main` branch, encompassing the entire project, including the main logic. The `Stubs` branch is provided for candidates to fill in the code in the `TaskList.js` file under the `Components` folder under `src` folder.

## Getting Started

To run the Frontend, ensure you have set up of backend already.
Make sure to start the server before starting FrontEnd Part.
( https://github.com/YashMatade/Doselect-Task-Management-Backend-/tree/main ) 
`npm install` and `npm start`.

then for Frontend part - 

1. Clone the repository and switch to the `Stubs` branch.
2. Install the required Node modules by running `npm install`.

# Project Architecture (FRONTEND)

The frontend of the Task Management project is developed using React, a popular JavaScript library for building user interfaces. Below is an overview of the project's frontend architecture.

The frontend follows a modular structure, organizing components and related files into coherent directories. Here's a breakdown of the key directories:

- **src/components:** Contains React components that are used to build the user interface. Components are further organized based on their functionality.

- **src/api:** Manages communication with the backend API. Includes functions to perform CRUD operations on tasks.

- **public:** Contains the HTML file and other static assets. The main `index.html` file is the entry point for the React application.

## Component Architecture
React components are structured based on their functionality and reusability. Here's a brief overview of key components:

- **TaskList:** Renders the list of tasks, handles task creation, updates, and deletions.
- **App:** The root component that manages the overall structure of the application, handling routing and state management.

## State Management

The application uses React hooks for state management, allowing components to manage and share state where necessary.

## Styling

Styling is achieved using CSS, and components are designed with a focus on responsiveness and a clean, intuitive user interface.


## Development Instructions

Developers are required to complete the code in the `stubs` branch under the   `src/components/TaskList.js` file. The following functions need to be implemented:

You will see the UI is in only in static mode you have to provide functionality by writing code in following funcions -

fetchTasks()
handleCreateTask()
handleUpdateTask()
handleDeleteTask()
handleEditTask()

Ensure that the logic is appropriately implemented, considering the task management features of creating, updating, and deleting tasks. Please refer to the provided comments and placeholders in the TaskList.js file for guidance on where to complete the code.


## Testing

After writing your code, ensure its correctness by running:

```bash

npm run test

This command will execute tests on the `TaskList.js` to validate the functionality of your code.

# Test Cases (1 suite, 4 test cases)
1. renders task list correctly ✅
2. creates a new task ✅
3. updates an existing task ✅
4. deletes an existing task ✅  

**(Make Sure that You have started the server)