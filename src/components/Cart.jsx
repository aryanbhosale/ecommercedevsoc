import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delItem } from '../redux/action/index';

const Cart = () => {

    const state = useSelector((state) => state.addItem);

    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    }

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label='Close' onClick={() => handleClose(cartItem)}></button>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3 className='display-6'>{cartItem.title.toUpperCase()}</h3>
                                <p className='lead fw-bold'>${cartItem.price}</p>
                                <p className='lead'>{cartItem.description.toUpperCase()}</p>
                            </div>
                        </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        state.length = 0;
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row text-center my-5 pt-5">
                        <h3>YOUR CART IS EMPTY</h3>
                    </div>
                </div>
            </div>
        );
    }

  return (
    <>
        {state?.length !== 0 && state?.map(cartItems)}
        {state.length !== 0 ? (
            <div className="container">
                <div className="row">
                    <NavLink to="/success" className="btn btn-outline-dark mb-5 w-25 mx-auto" onClick={emptyCart}>PROCEED TO CHECKOUT</NavLink>
                </div>
            </div>
        ) : emptyCart()}
    </>
  );
}

export default Cart;