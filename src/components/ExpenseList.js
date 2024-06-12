import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses, currency } = useContext(AppContext); // 1. Access currency context

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem 
                    id={expense.id} 
                    key={expense.id} 
                    name={expense.name} 
                    cost={expense.cost} 
                    currency={currency} // 1. Pass currency context
                />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
