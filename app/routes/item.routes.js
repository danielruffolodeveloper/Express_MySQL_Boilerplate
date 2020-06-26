module.exports = app => {
    const items = require("../controllers/item.controller.js");
  
    // Create a new item
    app.post("/items", items.create);
  
    // Retrieve all items
    app.get("/items", items.findAll);
  
    // Retrieve a single item with itemId
    app.get("/items/:itemId", items.findOne);
  
    // Update a Item with itemId
    app.put("/items/:itemId", items.update);
  
    // Delete a Item with itemId
    app.delete("/items/:itemId", items.delete);
  
    // Delete all Items
    app.delete("/items", items.deleteAll);
  };