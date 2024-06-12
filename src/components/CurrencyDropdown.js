import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);
    const currencies = [
        { symbol: '$', name: 'Dollar' },
        { symbol: '£', name: 'Pound' },
        { symbol: '€', name: 'Euro' },
        { symbol: '₹', name: 'Rupee' },
    ];

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    const dropdownStyles = {
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgreen',
        color: 'white',
        border: 'none',
        padding: '0.5rem',
        borderRadius: '4px',
    };

    return (
        <div className="form-group" style={{ width: '100%', height: '100%' }}>
            <label htmlFor="currencySelect"></label>
            <select
                id="currencySelect"
                style={dropdownStyles}
                value={currency}
                onChange={handleCurrencyChange}
            >
                {currencies.map((currency, index) => (
                    <option key={index} value={currency.symbol}>
                        {currency.symbol} {currency.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyDropdown;
