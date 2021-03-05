import React from 'react';
import './Checkout.css';

import { Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import { removeFromBasket } from '../features/appSlice';

function Checkout({id, title, image, price}) {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(
            removeFromBasket(id)
        )
    };

    return (
        <div className="checkout"> 
            <img
                src={image}
                alt=""
            />

            <div className="checkout__info">
                <p>{title}</p>
                <p>$ {price}</p>
                <Button onClick={removeFromCart}>
                    Remove from basket
                </Button>
            </div>
        </div>
    )
}

export default Checkout
