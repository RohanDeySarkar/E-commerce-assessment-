import React from 'react';
import './Transactions.css';

import { useSelector } from 'react-redux';
import {selectTranscations } from '../features/appSlice';

function Transactions() {
    const transactions = useSelector(selectTranscations);

    return (
        <div className="transactions">
            <h1>Transactions</h1>

            <div className="transactions__info">
                {transactions?.map((amount) => (
                    <p>Spent ${amount}</p>
                ))}
            </div>
        </div>
    )
}

export default Transactions
