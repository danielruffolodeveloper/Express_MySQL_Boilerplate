const sql = require("./db.js");

// constructor
const Item = function(item) {
  this.name = item.name;
  this.quantity = item.quantity;
  this.active = item.active;
};

Item.create = (newItem, result) => {
  sql.query("INSERT INTO items SET ?", newItem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created item: ", { id: res.insertId, ...newItem });
    result(null, { id: res.insertId, ...newItem });
  });
};

Item.findById = (itemId, result) => {
  sql.query(`SELECT * FROM items WHERE id = ${itemId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found item: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Item with the id
    result({ kind: "not_found" }, null);
  });
};

Item.getAll = result => {
    sql.query("SELECT * FROM items", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("items: ", res);
      result(null, res);
    });
  };

Item.updateById = (id, item, result) => {
  sql.query(
    "UPDATE items SET name = ?, quantity = ?, active = ? WHERE id = ?",
    [item.name, item.quantity, item.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Item with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated item: ", { id: id, ...item });
      result(null, { id: id, ...item });
    }
  );
};

Item.remove = (id, result) => {
  sql.query("DELETE FROM items WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Item with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted item with id: ", id);
    result(null, res);
  });
};

Item.removeAll = result => {
  sql.query("DELETE FROM items", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} items`);
    result(null, res);
  });
};

module.exports = Item;