import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const remaining = budget - totalExpenses;

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setNewBudget(value);
    };

    const handleBlur = () => {
        if (newBudget >= 20000) {
            window.alert("Budget cannot exceed £20,000");
            setNewBudget(20000);
        } else if (newBudget < remaining) {
            window.alert("You cannot reduce the budget lower than the spending");
            setNewBudget(budget);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Currency: {currency}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onBlur={handleBlur}
                onChange={handleBudgetChange}
                min={remaining}
                max="20000"
            />
        </div>
    );
};

export default Budget;
