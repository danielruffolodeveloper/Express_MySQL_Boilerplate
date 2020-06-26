const Item = require("../models/item.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const item = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    active: req.body.active
  });

  // Save Customer in the database
  Item.create(item, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Item."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Item.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Item.findById(req.params.itemId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.itemId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Item with id " + req.params.itemId
        });
      }
    } else res.send(data);
  });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Item.updateById(
    req.params.itemId,
    new Item(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Item with id ${req.params.itemId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Item with id " + req.params.itemId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Item.remove(req.params.itemId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.itemId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Item with id " + req.params.itemId
        });
      }
    } else res.send({ message: `Item was deleted successfully!` });
  });
};

// Delete all Items from the database.
exports.deleteAll = (req, res) => {
  Item.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all items."
      });
    else res.send({ message: `All items were deleted successfully!` });
  });
};