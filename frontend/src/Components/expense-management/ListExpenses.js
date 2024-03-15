import React, { useState,useEffect } from 'react'
import './ListExpenses.css'
import { useNavigate} from 'react-router-dom';
const ListExpenses = () => {
    const [expenses, setExpenses] = useState([
        {
            expenseId: '1',
            expenseName: 'test 1',
            amount: 200,
            expenseType: 'paid',
            date: new Date("2023-12-17T03:24:00"),
            category: 'grocery'
        },
        {
            expenseId: '2',
            expenseName: 'test 1',
            amount: 200,
            expenseType: 'received',
            date: new Date("2023-12-21T00:00:00"),
            category: 'food'
        },
        {
            expenseId: '3',
            expenseName: 'shirt',
            amount: 200,
            expenseType: 'paid',
            date: new Date("2023-12-21T00:00:00"),
            category: 'other'
        },
        {
            expenseId: '4',
            expenseName: 'New',
            amount: 200,
            expenseType: 'paid',
            date: new Date("2023-11-19T00:00:00"),
            category: 'other'
        },
        {
            expenseId: '5',
            expenseName: 'test 1',
            amount: 85,
            expenseType: 'paid',
            date: new Date("2023-11-17T00:00:00"),
            category: 'food'
        },
        {
            expenseId: '6',
            expenseName: 'test 1',
            amount: 20,
            expenseType: 'received',
            date: new Date("2023-02-14T00:00:00"),
            category: 'entertainment'
        },
        {
            expenseId: '7',
            expenseName: 'test 1',
            amount: 200,
            expenseType: 'paid',
            date: new Date("2024-01-12T00:00:00"),
            category: 'food'
        }
    ])
        const handleClick = (expenseId) => {
            navigate(`/viewexpense/${expenseId}`);
        };
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [filterByType, setFilterByType] = useState('');
    const [filterByCategory, setFilterByCategory] = useState('');
    const navigate = useNavigate();
    const filteredExpenses = expenses.filter(expense => {
        return (
            expense.expenseName.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterByType === '' || expense.expenseType === filterByType) &&
            (filterByCategory === '' || expense.category === filterByCategory)
        );
    });

    const sortedExpenses = filteredExpenses.sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.date) - new Date(a.date);
        } else if (sortBy === 'amount') {
            return b.amount - a.amount;
        } else {
            return new Date(b.date) - new Date(a.date);
        }
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleTypeFilterChange = (e) => {
        setFilterByType(e.target.value);
    };

    const handleCategoryFilterChange = (e) => {
        setFilterByCategory(e.target.value);
    };
    
    return (
        <div className="expenses-container">
            <h1>Your Expenses</h1>
            <div className="search-container">
                <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} />
                <select value={sortBy} onChange={handleSortChange}>
                    <option value="date">Sort by Date</option>
                    <option value="amount">Sort by Amount</option>
                </select>
                <select value={filterByType} onChange={handleTypeFilterChange}>
                    <option value="">All Types</option>
                    <option value="paid">Paid</option>
                    <option value="received">Received</option>
                </select>
                <select value={filterByCategory} onChange={handleCategoryFilterChange}>
                    <option value="">All Categories</option>
                    <option value="food">Food</option>
                    <option value="grocery">Grocery</option>
                    <option value="car">Car</option>
                    <option value="rent">Rent</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="insurance">Insurance</option>
                    <option value="travel">Travel</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="expense-list">
                <ul className="expenses-list">
                    {sortedExpenses.map(expense => (
                         <li className={`expense-item ${expense.expenseType === 'paid' ? 'paid' : 'received'}`} key={expense.expenseId} onClick={()=>handleClick(expense.expenseId)}>
                         <div>{expense.expenseName}</div>
                         <div>{expense.amount}</div>
                         <div>{expense.expenseType}</div>
                         <div>{expense.date.toLocaleDateString()}</div>
                         <div>{expense.category}</div>
                     </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default ListExpenses;