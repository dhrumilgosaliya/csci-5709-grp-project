let express = require('express');
let router = express.Router();
let {
    getExpenses, 
    getExpensebyId, 
    addExpense, 
    updateExpensebyId, 
    deleteExpense } = require('./../controllers/expenseController');
router.post('/add', addExpense);
router.get('/getall', getExpenses);
router.get('/get/:expenseId', getExpensebyId);
router.put('/update/:expenseId', updateExpensebyId);
router.delete('/delete/:expenseId', deleteExpense);
module.exports = router;