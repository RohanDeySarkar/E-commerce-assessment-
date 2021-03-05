import React from 'react';
import './Navbar.css'

import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch } from 'react-redux';

import { selectBasket } from '../features/appSlice';
import { selectUser, logout } from '../features/userSlice';

import LocalMallIcon from '@material-ui/icons/LocalMall';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

import { useHistory } from 'react-router-dom';

function Navbar() {
    const user = useSelector(selectUser);
    
    const basket = useSelector(selectBasket); 

    // console.log(basket);

    const dispatch = useDispatch();

    const history = useHistory();
    
    return (
        <div className="navbar">
            <div className="navbar__left" onClick={() => dispatch(logout())}>
                <Avatar
                    src={user.photo}
                    alt=""
                    className="navbar__avatar"
                />
                <p>{user.displayName}</p>
            </div>
            
            <div className="navbar__middle">
                <SearchIcon />
                <input
                    placeholder="dummy search"
                    type="text"
                />
            </div>

            <div className="navbar__right">
                <div className="navbar__rightText">
                    <HomeIcon onClick={() => history.push('/')} />
                    <p onClick={() => history.push('/')}>home</p>
                </div>

                <div className="navbar__rightText">
                    <SwapHorizIcon onClick={() => history.push('/transactions')} />
                   <p onClick={() => history.push('/transactions')}>View Transactions</p>
                </div>

                <div className="navbar__rightText">
                    <div className="navbar__rightItems" onClick={() => history.push('/basket')}>
                        <p>{basket?.length}</p>
                        <LocalMallIcon />
                    </div>
                    
                    <p onClick={() => history.push('/basket')}>Go to Basket</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
