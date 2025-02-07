const items = []; // Temporary in-memory storage

// Create an item
exports.createItem = (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json({ message: 'Item created', item });
};

// Get all items
exports.getItems = (req, res) => {
    res.json(items);
};

// Update an item by ID
exports.updateItem = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const index = items.findIndex(item => item.id === id);

    if (index !== -1) {
        items[index] = { ...items[index], ...updatedData };
        res.json({ message: 'Item updated', item: items[index] });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

// Delete an item by ID
exports.deleteItem = (req, res) => {
    const { id } = req.params;
    const index = items.findIndex(item => item.id === id);

    if (index !== -1) {
        items.splice(index, 1);
        res.json({ message: 'Item deleted' });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};
