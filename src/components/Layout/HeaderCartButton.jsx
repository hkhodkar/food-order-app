import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../store/CartContext";
import { useContext, useEffect, useState } from "react";


export default function HeaderCartButton({ onShowCart }) {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfItems = cartCtx.items.reduce((prev, item) => {
        return prev + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if (cartCtx.items.length === 0) return;
        setButtonIsHighlighted(true);
       const timer =setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300)
        return () => clearTimeout(timer);
    }, [cartCtx.items])
    return (
        <button onClick={onShowCart} className={btnClasses}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your cart </span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}