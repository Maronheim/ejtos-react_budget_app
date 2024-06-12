import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: { name: props.name, cost: 10 }, // Decrease cost by 10
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><img src="plus.jpg" alt="+" onClick={event => increaseAllocation(props.name)} style={{ width: '30px', height: '30px' }} /></td>
            <td><img src="minus.png" alt="-" onClick={event => handleDeleteExpense(props.name)} style={{ width: '30px', height: '30px' }} /></td>
        </tr>
    );
};

export default ExpenseItem;
