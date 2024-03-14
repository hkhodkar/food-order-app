import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

export default function Header({onShowCart}) {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meal</h1>
                <HeaderCartButton onShowCart={onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food" />
            </div>
        </Fragment>
    )
}