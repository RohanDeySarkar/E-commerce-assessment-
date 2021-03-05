import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Basket.css';

import { selectBasket, checkout } from '../features/appSlice';

import Checkout from './Checkout';
import { Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

function Basket() {
    const dispatch = useDispatch();

    const basket = useSelector(selectBasket);

    const history = useHistory();

    const [subTotal, setSubTotal] = useState(null);
    
    const totalAmount = () => {
        setSubTotal(basket?.reduce((amount, item) => parseInt(item.price) + amount, 0));
    };

    const addTransaction = () => {
        alert("Thank you for shopping with us 😊")
        dispatch(checkout(subTotal));
        history.push('/')
    };

    useEffect(() => {
        totalAmount()
    }, [basket])

    // console.log(subTotal)

    return (
        <div className="basket">
            <div className="basket__items">
                {basket?.map((item) => (
                    <Checkout
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
           
           <Button onClick={addTransaction}>
               Checkout ${subTotal}
            </Button>
        </div>
    )
}

export default Basket
