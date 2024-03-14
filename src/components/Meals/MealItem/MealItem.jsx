import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem({id,name, description, price}) {
    const mealsPrice =`$${price.toFixed(2)}`;
        
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{mealsPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} />
            </div>
        </li>
    )
}