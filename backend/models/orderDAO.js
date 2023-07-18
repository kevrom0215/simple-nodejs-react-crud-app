const getButtonTimerDAO = `SELECT * from ordered where item = ?`

const getAllButtonTimerDAO = `SELECT * FROM ordered`

const updateButtonTimerDAO = `UPDATE ordered SET date_triggered = ? WHERE item = ?`



module.exports = {
    getButtonTimerDAO,
    getAllButtonTimerDAO,
    updateButtonTimerDAO
}