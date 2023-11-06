/*
Filename: AdvancedWebApp.js
Description: This code implements a sophisticated web application that allows users to create, update, and delete tasks.

Note: This code assumes the presence of an HTML file with appropriate elements like buttons, input fields, etc.

*/

// Import necessary modules and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store tasks
const tasks = [];

// Route to create a new task
app.post('/tasks', (req, res) => {
  const { taskName, taskDescription } = req.body;
  
  // Generate a unique ID for the task
  const taskId = tasks.length + 1;
  
  tasks.push({
    id: taskId,
    name: taskName,
    description: taskDescription,
  });
  
  res.status(201).json({ message: 'Task created successfully', taskId });
});

// Route to retrieve all tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// Route to update a task
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { taskName, taskDescription } = req.body;
  
  // Find the task by ID
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    res.status(404).json({ message: 'Task not found' });
    return;
  }
  
  // Update task details
  task.name = taskName;
  task.description = taskDescription;
  
  res.status(200).json({ message: 'Task updated successfully' });
});

// Route to delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  
  // Find the index of the task to delete
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  if (taskIndex === -1) {
    res.status(404).json({ message: 'Task not found' });
    return;
  }
  
  // Remove the task from the array
  tasks.splice(taskIndex, 1);
  
  res.status(200).json({ message: 'Task deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});