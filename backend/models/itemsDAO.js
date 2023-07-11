const listItemsDAO = `SELECT * from items`;

const addItemDAO = `INSERT INTO 
items(name, quantity) values (?,?)`;

const editItemDAO = `UPDATE items SET quantity = ? WHERE name = ?`;

const deleteItemDAO = `DELETE from items WHERE name = ?`;

module.exports = {
    listItemsDAO,
    addItemDAO,
    editItemDAO,
    deleteItemDAO
}