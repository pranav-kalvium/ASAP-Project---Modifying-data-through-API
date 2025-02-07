const express = require('express');
const router = express.Router();
const { createItem, getItems, updateItem, deleteItem } = require('./handlers');

// Define the CRUD Routes
router.post('/items', createItem);    // Create an item
router.get('/items', getItems);      // Read all items
router.put('/items/:id', updateItem); // Update an item by ID
router.delete('/items/:id', deleteItem); // Delete an item by ID

module.exports = router;
