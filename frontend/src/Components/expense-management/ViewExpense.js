import React, { useState } from 'react';
import './ViewExpense.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const ViewExpense = () => {
    const [expense, setExpense] = useState({
        expenseId: '1',
        expenseName: 'Test Expense',
        expenseType: 'received',
        expenseAmount: 250,
        paymentMedium: 'cash',
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
        attachment: null,
        category: 'other'
    });
    const navigate =useNavigate();
    const handleUpdate = () => {
        navigate(`/editexpense/${expense.expenseId}`)
    };

    const handleDelete = () => {
        Swal.fire({ 
            title: 'Are you sure you want to delete it!',
            icon: 'warning', 
            showCancelButton: true,
            confirmButtonColor: "#4c4b42",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => { 
            if (result.isConfirmed) {
               
                Swal.fire({title:'Deleted!',icon: 'success',confirmButtonColor: '#4c4b42',
                cancelButtonColor: '#6e6d66' }); 
            } else {
                Swal.fire({title:'Cancelled!',icon: 'error',confirmButtonColor:'#4c4b42'}); 
            }
        });
    };
    

    return (
        <div className="view-expense-container">
            <h2>Expense Details</h2>
            <p className="expense-detail"><strong>Expense Name:</strong> {expense.expenseName}</p>
            <p className="expense-detail"><strong>Expense Type:</strong> {expense.expenseType}</p>
            <p className="expense-detail"><strong>Expense Amount:</strong> ${expense.expenseAmount}</p>
            <p className="expense-detail"><strong>Payment Medium:</strong> {expense.paymentMedium}</p>
            <p className="expense-detail"><strong>Description:</strong> {expense.description}</p>
            <p className="expense-detail"><strong>Category:</strong> {expense.category}</p>
            <div className="buttons-container">
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ViewExpense;
