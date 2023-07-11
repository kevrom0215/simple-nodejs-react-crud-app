const listItemsDAO = `SELECT * from items`;

const addItemDAO = `INSERT INTO 
items(name, quantity) values (?,?)`;

const editItemDAO = `UPDATE items SET quantity = ? WHERE name = ?`;

const deleteItemDAO = `DELETE from items WHERE name = ?`;

const checkItemDAO = `SELECT name from items where name = ?`

module.exports = {
    listItemsDAO,
    addItemDAO,
    editItemDAO,
    deleteItemDAO,
    checkItemDAO
}