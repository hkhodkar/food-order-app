import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton({onShowCart}) {
    return (
        <button onClick={onShowCart} className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your cart </span>
            <span className={classes.badge}>3</span>
        </button>
    )
}