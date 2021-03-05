import React from 'react';
import './CardRow.css';

import { useDispatch } from 'react-redux'

import { addToBasket } from '../features/appSlice';

import Button from '@material-ui/core/Button';

function CardRow({id, title, price, image}) {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            addToBasket(
                {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                }
            )
        )
    };

    return (
        <div className="cardRow">
            <img
                src={image}
                alt=""
            />

            <div className="cardRow__info">
                <p>{title}</p>
                <p>$ {price}</p>
                <Button onClick={addToCart}>
                    Add to basket
                </Button>
            </div>
        </div>
    )
}

export default CardRow
