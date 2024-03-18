import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../store/CartContext';
import CartItem from './CartItem.jsx'

export default function Cart({ hideCart }) {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.total.toFixed(2);
    const hasItem = cartCtx.items.length > 0;

    function cartItemRemoveHandler(id) {
        cartCtx.remove(id);
    }

    function cartItemAddHandler(item) {
        cartCtx.add({ ...item, amount: 1 })

    }

    const cartItems =
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
        </ul>
    return (
        <Modal hideCart={hideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={hideCart} className={classes['button--alt']}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}